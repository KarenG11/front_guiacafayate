// backend/db.js
import mysql from "mysql2";

// Configuración de la conexión
const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,       // tu servidor MySQL
  user: process.env.MYSQL_USER,           // tu usuario MySQL
  password: process.env.MYSQL_PASSWORD,  // la contraseña que pusiste al instalar
  database: process.env.MYSQL_DATABASE   // la base de datos que vamos a crear
});

// Conectamos
connection.connect(err => {
  if (err) {
    console.error("Error al conectar con MySQL:", err);
  } else {
    console.log("Conectado a MySQL correctamente!");
  }
});

export default connection;
