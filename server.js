require("colors")
require("./config/db")

const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")

const indexRoute = require("./routes")

const app = express()
const port = process.env.PORT || 3000

// Set PUG extension
app.set("view engine", "pug")

// Middleware
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

// Routing
app.use(indexRoute)


// Port d'écoute
app.listen(port, () => {
  console.log(`
    Connexion au serveur établie avec succès sur le port ${port}`.bgCyan)
})
