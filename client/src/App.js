import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from "axios";
import Manager from "./components/manager";

import quizService from "./services/quizService";

function App() {
  return (
    <div className="App">
      <Manager/>
    </div>
  );
}

export default App;
