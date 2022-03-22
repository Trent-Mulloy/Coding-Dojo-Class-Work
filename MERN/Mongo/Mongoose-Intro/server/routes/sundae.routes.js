const SundaeController = require("../controllers/sundae.controller");

module.exports = app =>{
    app.get("/api/test", SundaeController.testResponse);

    app.get("/api/findAll", SundaeController.findAll);

    app.post("/api/new/sundae", SundaeController.create);

    app.get("/api/sundae/:_id", SundaeController.findOne);
}