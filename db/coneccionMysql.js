const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user:"root",
    password:"*Cpalta1",
    database: "bootcamp",
    insecureAuth: true
   
});

// Si tengo un error de auth en consola, se arregla poniento esto: 
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'

connection.connect((err)=>{
    if (err){
    console.log("Error en Mysql: " + err.stack);
    return;
    }
    console.log("Estamos conectado en Mysql: " + connection.threadId);
});

module.exports = connection;