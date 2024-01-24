import connection from "../database.js";

// Query directly from the database
export const indexController = async (req, res) => {
  await connection.query("SELECT * FROM users").then((result) => {
    res.send(result[0]);
  });
};
