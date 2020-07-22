import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from "react-bootstrap/Button";

import Home from "./pages/home";
import Quiz from "./pages/quiz";
import QuizStart from './pages/quizStart';
import ExampleQuiz from "./components/examplequiz";
import QuizEnd from "./pages/quizEnd";
import ScoreDisplay from "./pages/scoreDisplay";
import Manager from "./components/manager";

function App() {
  return (
    <div className="App">
      <Manager quizList = {ExampleQuiz}/>
    </div>
  );
}

const ExampleScores = [{name: "WER", score: 200},{name:"NLR",score: 100}];

export default App;
