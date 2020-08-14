const express = require("express");
const app = express();
const mongoose = require('mongoose');

const db = require("./models");

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/test', {useNewUrlParser: true});
//TODO: Hook up the mongoose database

app.get('/', (req, res) => {
    res.send({ message: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
  });

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static('../client/build'));
  
    const path = require('path');
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
  
  }
  

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });