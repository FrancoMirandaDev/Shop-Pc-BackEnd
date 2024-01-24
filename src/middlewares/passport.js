//Se usa para facilitar el manejo de authentificacion y agrega una capa mas de seguridad

import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";

import User from "../models/mysql/users.js";

passport.use(
  new LocalStrategy(
    {
      usernameField: "user_handle",
      passwordField: "user_password",
    },
    async (user_handle, user_password, done) => {
      const user = await User.get(user_handle);
      if (!user) {
        return done(null, false, { message: "User not found" });
      }

      if (!(await User.compare_password(user_password, user.user_password))) {
        return done(null, false, { message: "Incorrect password" });
      }

      return done(null, user);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.user_handle);
});

passport.deserializeUser(async (user_handle, done) => {
  const user = await User.get(user_handle);
  done(null, user);
});
