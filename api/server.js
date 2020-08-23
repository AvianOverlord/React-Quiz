const express = require("express");
const app = express();
const mongoose = require('mongoose');

const db = require("./models");
const seed = require("./data/examplequiz");

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
  
app.get("/api/quizlist", (req,res) => {
  console.log("Recieved Request");
  db.QuizData.find().then(data => {
    console.log("Passed Data");
    res.json(data);
  }).catch(err => {
    res.json(err);
  });
});


db.QuizData.insertMany(seed).then(()=>{
  console.log("Data inserted.");
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });