const usersController = require("../controllers/users")

module.exports = (app) =>{
    app.get("/", (req,res)=>{
        res.send("mamam triunfre")
    });

    app.get("/usuarios", usersController.users);
    app.get("/usuario/:id", usersController.user);
    app.post("/usuarios", usersController.createUser);
}