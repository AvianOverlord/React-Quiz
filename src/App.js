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

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home}/>
        <Route exact path="/quizstart" render={(props) => (<QuizStart {...props} quiz={ExampleQuiz}/>)}/>
        <Route exact path="/quiz" render={(props) => (<Quiz {...props} quiz={ExampleQuiz}/>)}/>
        <Route exact path="/quizEnd" component={QuizEnd}/>
        <Route exact path="/scores" render={(props) => (<ScoreDisplay {...props} scoreTable={ExampleScores} />)} />
      </Router>
    </div>
  );
}

const ExampleScores = [{name: "WER", score: 200},{name:"NLR",score: 100}];

export default App;
