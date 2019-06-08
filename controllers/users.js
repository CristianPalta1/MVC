const dbjson = require("../db/dbjson");


module.exports = {
    users : (req, res) =>{
        console.log("Get usuarios");
        res.send({msg:"Todos los usuarios", dbjson});
    },
    user : (req, res) =>{
        console.log("Get 1 usuario");
        const { id }  = req.params;
        res.send(dbjson[id]);
    },
    createUser : (req, res) =>{
        const datosUser = req.body
        console.log("creando usuario", datosUser);
        
        res.send(datosUser);
    }  
}