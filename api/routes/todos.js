const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


const Todo =require('../models/todo');

router.get("/list", (req, res, next) => {
  mongoose.model('Todo').find(function(err, todos){
    res.send(todos)
  });
  /*res.status(200).json({
    message: 'handling the get requests to todo'
  });*/
});


router.get("/:id", async (req, res) => {
  try{
    const todo = await Todo.findOne({ _id: req.params.id })
    res.send(todo)
  }catch {
    res.status(404)
    res.send({ error: "gtodo doesn't existt!" })
  }
})

router.post("/add", async (req, res) => {
  const todo = new Todo({
    taskname: req.body.taskname,
    taskdescription: req.body.taskdescription,
    creator: req.body.creator,
    duration: req.body.duration
  })
  await todo.save()
  res.send(todo)
})

router.delete("/:id", async (req, res) => {
  try {
    await Todo.deleteOne({ _id: req.params.id })
    res.status(204).send()
  } catch {
    res.status(404)
    res.send({ error: "Todo doesn't existd!" })
  }
})

module.exports = router;
