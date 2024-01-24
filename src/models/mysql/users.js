// get the client
import db from "../../database.js";
import bcrypt from "bcrypt";

class User {
  constructor(
    user_handle,
    user_password,
    email_address,
    first_name,
    last_name,
    phonenumber
  ) {
    this.user_handle = user_handle;
    this.user_password = user_password;
    this.email_address = email_address;
    this.first_name = first_name;
    this.last_name = last_name;
    this.phonenumber = phonenumber;
  }

  async create() {
    try {
      await db.query(
        `INSERT INTO users (user_handle, user_password, email_address, first_name, last_name, phonenumber)
        VALUES (?, ?, ?, ?, ?, ?);`,
        [
          this.user_handle,
          this.user_password,
          this.email_address,
          this.first_name,
          this.last_name,
          this.phonenumber,
        ]
      );
      console.log("User created successfully");
    } catch (e) {
      console.log(e.message);
      throw new Error("Error creating users.\nThis error: " + e.message);
    }
  }

  static async get(user_handle) {
    // Implementar la lógica para obtener un usuario
    try {
      const user = await db.query(
        `SELECT * FROM users WHERE user_handle = ?;`,
        [user_handle]
      );
      return user[0][0];
    } catch (e) {
      console.log(e.message);
      throw new Error("Error getting user.\nThis error: " + e.message);
    }
  }

  static async encrypt_password(password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }

  static async compare_password(password, user_password) {
    return await bcrypt.compare(password, user_password);
  }
}

export default User;
