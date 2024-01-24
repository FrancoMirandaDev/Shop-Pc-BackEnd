import mysql from "mysql2/promise";
import "dotenv/config";

const connection = await mysql.createConnection(process.env.DATABASE_URL);

try {
  await connection.connect();
  console.log(
    "Conexión exitosa a la base de datos: ",
    connection.config.database
  );
} catch (error) {
  console.error("Error de conexión a la base de datos: ", error);
}

export default connection;
