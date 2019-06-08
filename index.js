const express = require("express");
const bodyParser = require("body-parser");

const app = express(); //para inicializar expres creo una instancia


//midware para caputrar en json lo que viene del body, ais funciona el body-parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const routeaUsers = require("./routes/users")(app) //pasaos la instancia de express como parametros

// app.get("/",(req, res) =>{
//     console.log("hola mami jojso");
//     res.send("Hola"); //asi mando algo con el response
// });  //En una peticion get leo parametros. En post si se trabaja en el body //get enviar parametros URL y el post viaja por el body
// app.get("/usuario/:id", (req,res)=>{
//     const { id } = req.params
//     const parametros = req.params; // param para un solo parametro
//     console.log(parametros);
//     res.send(id); //asi respondo
// });

// app.post("/usuario", (req, res)=>{
//     const datoUsuario = req.body;
//     console.log(req.body);
//     res.send(datoUsuario);

// });


app.listen(5000, ()=>{
    console.log("Servidor escuchando en el puerto 5000");
});

