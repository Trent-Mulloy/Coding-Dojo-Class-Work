const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/sundaes_example_MERN", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> console.log("your connected to the db"))
    .catch(err=> console.log("DB coneection Failed", err))