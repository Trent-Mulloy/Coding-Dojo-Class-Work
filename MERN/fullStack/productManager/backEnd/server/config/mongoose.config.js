const mongoose = require("mongoose");
mongoose.set('runValidators', true)
mongoose.connect("mongodb://localhost/product_manager", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> console.log("your connected to the db"))
    .catch(err=> console.log("DB coneection Failed", err))