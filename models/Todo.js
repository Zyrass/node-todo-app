const mongoose = require("mongoose")
const { Schema, model } = mongoose

const todoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    default: false
  }

})

module.exports = mongoose.model("tasks", todoSchema)