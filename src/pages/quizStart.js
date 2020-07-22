import React, {Component} from "react";

class QuizStart extends React.Component{
    constructor(props)
    {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        alert("You clicked the start button.");
    }

    componentDidMount(){
        document.title = this.quizTitle;
    };

    render()
    {
        return(
            //TODO: Make this work by taking in data from the quiz
            <div className="titleScreen">
                <h1 className="title">{this.props.quiz.quizName}</h1>
                <h2 className="title">{this.props.quiz.quizDesc}</h2>
                <button onClick={this.handleClick} className="startButton btn btn-danger">Start</button>
            </div>
        );
    };
}

export default QuizStart;