import React, {Component} from "react";
import Home from "../pages/home";
import QuizEnd from "../pages/quizEnd";
import QuizStart from "../pages/quizStart";
import Quiz from "../pages/quiz";
import ScoreDisplay from "../pages/scoreDisplay";
import Credits from "../pages/credits";


class Manager extends React.Component{
    constructor(props){
        super(props)
        this.state = {currentQuiz: {}, currentScore: "", currentPage: "Home", currentName: ""};
        
        this.openQuiz = this.openQuiz.bind(this);
        this.startQuiz = this.startQuiz.bind(this);
        this.endQuiz = this.endQuiz.bind(this);
        this.displayScores = this.displayScores.bind(this);
        this.returnHome = this.returnHome.bind(this);
        this.showCredits = this.showCredits.bind(this);
    }

    openQuiz(quiz)
    {
        this.setState({
            ...this.state,
            currentQuiz: quiz,
            currentPage: "Start"
        })
    }

    startQuiz()
    {
        this.setState({
            ...this.state,
            currentPage: "Quiz"
        })
    }

    endQuiz(inputScore)
    {
        this.setState({
            ...this.state,
            currentScore: inputScore,
            currentPage: "End"
        })
    }

    displayScores(name)
    {
        console.log("Name: " + name);
        this.setState({
            ...this.state,
            currentName: name,
            currentPage: "Score"
        })
    }

    returnHome()
    {
        this.setState({
            currentQuiz: {},
            currentScore: "",
            currentName: "",
            currentPage: "Home"
        })
    }

    showCredits()
    {
        this.setState({
            ...this.state,
            currentPage: "Credits"
        })
    }

    render()
    {
        return(
            <div className="manager">
                {this.state.currentPage === "Home" && <Home quizList = {this.props.quizList} openQuiz= {this.openQuiz}/>}
                {this.state.currentPage === "Start" && <QuizStart quiz={this.state.currentQuiz} startQuiz={this.startQuiz}/>}
                {this.state.currentPage === "Quiz" && <Quiz quiz={this.state.currentQuiz} endQuiz={this.endQuiz}/>}
                {this.state.currentPage === "End" && <QuizEnd score={this.state.currentScore} displayScores={this.displayScores}/>}
                {this.state.currentPage === "Score" && <ScoreDisplay quiz={this.state.currentQuiz} newName={this.state.currentName} newScore={this.state.currentScore} returnHome={this.returnHome} showCredits={this.showCredits}/>}
                {this.state.currentPage === "Credits" && <Credits returnHome={this.returnHome}/>}
            </div>
        );
    }
}

export default Manager;