const mongoose = require("mongoose")

const dbConnexion = mongoose.connect(
  "mongodb+srv://compteDemo:passwordDemo@nodetodo.8h83h.mongodb.net/todos",
  { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
  console.log(`
    Connexion à la base de donnée réussi.`.bgGreen.white.bold)
  console.log("")
}).catch( error => {
  console.log(`
    Désolé, la connexion à la base de donnée à échoué.
    Message : `.bgBlack.yellow.bold + `${error}`.bgBlack.red)
  console.log("")
})
