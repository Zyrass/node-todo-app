const Todo = require("../models/Todo")

const getIndex = (req, res) => {
  Todo.find({}, (err, todos) => {
    const counterAll = todos.length
    res.status(200).render("index", {
      todos,
      counterAll
    })
  })
}

const postIndex = (req, res) => {
  const newTodo = new Todo({
    title: req.body.title
  })
  console.log(newTodo)
  newTodo.save(err => {
    if(err) console.log(err)
    res.status(200).redirect("/")
  })
}

const deleteIndex = (req, res) => {
  Todo.findByIdAndDelete(
    {_id: req.params.id_task },
    (err, result) => {
      if (err) console.log(err)
      console.log(`ID Supprimé : ${req.params.id_task}`.bgYellow.black)
      res.redirect("/")
    })
}

const putIndex = (req, res) => {
  console.log(req.params.id_task)
}

module.exports = {
  getIndex,
  postIndex,
  deleteIndex,
  putIndex
}

