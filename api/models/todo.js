const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  //_id: mongoose.Types.ObjectId,
  taskname: String,
  taskdescription: String,
  creator: String,
  duration: Number,
  createdAt: { type: Date, default: Date.now },
  expireAt: {
  type: Date,
  default: Date.now,
  index: { expires: '5m' },
}
});

module.exports = mongoose.model('Todo', todoSchema);
