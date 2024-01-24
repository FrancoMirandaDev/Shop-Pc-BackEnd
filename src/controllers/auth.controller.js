import passport from "passport";
import User from "../models/mysql/users.js";

export const loginUserController = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/error",
});

export const createUserController = async (req, res) => {
  let {
    user_handle,
    user_password,
    email_address,
    first_name,
    last_name,
    phonenumber,
  } = req.body;

  if (
    !user_handle ||
    !user_password ||
    !email_address ||
    !first_name ||
    !last_name
  ) {
    res.status(400).send("Bad request");
    return;
  }

  // encrypt password
  console.log(user_password);
  let encryptedPassword = await User.encrypt_password(user_password);
  console.log(encryptedPassword);
  user_password = encryptedPassword;

  // create user
  const user = new User(
    user_handle,
    user_password,
    email_address,
    first_name,
    last_name,
    phonenumber
  );

  // add user to database
  await user.create();

  // add redirect to login
  const userDB = await User.get(user_handle);
  return res.send("Usuario creado\n" + JSON.stringify(userDB));
};
