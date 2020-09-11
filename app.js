const express = require('express')
const app = express();
const morgan = require('morgan');//package to manage login
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const TodoRoutes = require('./api/routes/todos');

mongoose.connect(//connecting to the database server
  'mongodb+srv://admin_rk:'+
  'Easypay123' +
  '@cluster0.zcw4h.mongodb.net/<dbname>?retryWrites=true&w=majority',
    {
      //useMongoClient: true,//uses mongodb client under the hood
      useUnifiedTopology: true,
      useNewUrlParser: true
    }
);

app.use(morgan('dev'));//passing every route through this
app.use(bodyParser.urlencoded({extended: false}));//have different properties which we can extract
app.use(bodyParser.json());

//app.use('/Products', productController);
app.use('/', TodoRoutes);


module.exports = app;
