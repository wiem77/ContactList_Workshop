const mongoose = require("mongoose")
const config = require("config")
const connectDB = () => {
  mongoose
    .set("strictQuery", false)
    .connect(config.get("MONGOURI"), {
      useNewUrlParser: true,

      useUnifiedTopology: true,
    })

    .then(() => console.log("mongoose connected")) //promes
    .catch(() => console.log("erreur database"))
}
module.exports = connectDB
