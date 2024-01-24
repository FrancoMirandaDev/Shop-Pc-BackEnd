//Ejecuta la app en el puerto "x" y establece el entorno en el cual se esta ejecutando

import app from "./server.js";
import "./database.js";

async function main() {
  app.listen(process.env.PORT);

  console.log("Server on port", process.env.PORT);
  console.log("Environment:", process.env.NODE_ENV);
}

main();
