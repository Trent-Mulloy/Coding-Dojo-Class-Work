const JokeController = require("../controllers/joke.controller");

module.exports = app =>{
    app.get("/api/test", JokeController.testResponse);

    app.get("/api/jokes", JokeController.findAll);

    app.get("/api/jokes/:_id", JokeController.findOne);

    app.get("/api/jokes/new", JokeController.createJoke);

    app.delete("/api/jokes/delete/:_id", JokeController.deleteOne);

    app.patch("/api/update/jokes/:_id", JokeController.updateOne)
}