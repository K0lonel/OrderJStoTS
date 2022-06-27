// models/todo.js
const mongoose = require("mongoose");

interface TodoInformation {
  text: string;
  complete: string;
}

const TodoSchema = new mongoose.Schema<TodoInformation>({
  text: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    required: true,
  },
});

const Todo = mongoose.model<TodoInformation>("todo", TodoSchema);
module.exports = Todo;
