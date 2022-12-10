const express = require("express")
//creation de server
const app = express()
//MiddelWare
app.use(express.json())
//connectDataBAse
const connectDB = require("./config/connectDB")
connectDB()
//routes
app.use("/contacts", require("./routes/contact"))

//run a server
const port = process.env.PORT || 5000
app.listen(port, (err) =>
  err
    ? console.log("erreur serveur not runnig")
    : console.log(`server runnig on port ${port}`)
)
