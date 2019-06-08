const dbjson = require("../db/dbjson");
const db = require ("../db/coneccionMysql");


module.exports = {
    users : (req, res) =>{
        console.log("Get usuarios");
        db.query("SELECT * FROM users", (error, result, fields)=>{
            if(error){
                res.status(502).send(error);
            }
            red.send(result);
        });
        // res.send({msg:"Todos los usuarios", dbjson});
    },
    user : (req, res) =>{
        console.log("Get 1 usuario");
        const { id }  = req.params;
        res.send(dbjson[id]);
    },
    createUser : (req, res) =>{
        // const datosUser = req.body
        // console.log("creando usuario", datosUser);
        db.query("INSERT INTO users (id,nombre,rol) VALUES (NULL, ?,?)",
        [nombre, rol],
        (error, result, fields)=>{
            if(error){
                res.sattus(502).send(error);
            }
            res.send(result);
        })
        res.send(datosUser);
    },
    updateUser: (req, res) =>{
        const { id, nombre, rol } = req.body;
        const sql = `UPDATE users SET nombre = ${db.escape(nombre)} WHERE id= ${db.escape(id)}` ///asi se blinda para que no se inserte sql
        db.query(sql, (error, result, fields)=>{
            if(error){
                res.sattus(502).send(error);
            }
            res.send(result);
        })
        res.send(datosUser);
    },
    deleteUser: (req, res) =>{
        const { id } = req.body;
        const sql = `DELETE FROM users WHERE id = ${db.escape(id)}` ///asi se blinda para que no se inserte sql
        db.query(sql, (error, result, fields)=>{
            if(error){
                res.sattus(502).send(error);
            }
            res.send(result);
        })
        res.send(datosUser);
    }

}

// CREATE TABLE IF NOT EXISTS users (
//     id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
//     nombre VARCHAR(255) NOT NULL,
//     rol VARCHAR(100) NOT NULL
// );