import React, {Component} from "react";
import Question from "../components/question";
import Timer from "../components/timer";

class Quiz extends React.Component{
    constructor(props){
        super(props);
        this.state = {index: 0, score: 0, timer: 200, currentQuestionText: "", currentAnswers: [], currentCorrect: ""};
        this.getAnswer = this.getAnswer.bind(this);
        this.decrementTimer = this.decrementTimer.bind(this);
    }

    componentDidMount()
    {
        this.setQuestion();
    }

    setQuestion()
    {
        this.setState({
            ...this.state,
            currentQuestionText: this.props.quiz.questions[this.state.index].question,
            currentAnswers: this.props.quiz.questions[this.state.index].answers,
            currentCorrect: this.props.quiz.questions[this.state.index].correct
        })
    }

    getAnswer(correct)
    {
        if(correct)
        {
            console.log("Correct answer given");
            this.setState({
                ...this.state,
                index: this.state.index+1,
                score: this.state.score+10
            }, () => {
                console.log(this.state.index);
            });
        }
        else
        {
            console.log("Incorrect answer given");
            this.setState({
                ...this.state,
                index: this.state.index+1,
                timer: this.state.currentTimer-10
            })
        }
        console.log("Current Index is" + this.index);

        if(this.index >= this.props.quiz.questions.length)
        {
            this.props.endQuiz(this.score);
        
        }
        else
        {
            this.setQuestion();
        }
    }

    decrementTimer()
    {
        const currentTimer = this.timer;

        this.setState({
            ...this.state,
            timer: currentTimer-1
        })

        if(this.timer <= 0)
        {
            this.props.endQuiz(this.score);
        }
    }

    render()
    {
        return(
            <div className="container quizScreen">
                <div className="row">
                    <p className="col-3">Score: <span className="scoreDisplay"></span></p>
                    <Timer timerValue= {this.state.timer} decrementTimer= {this.decrementTimer}/>
                </div>
                <div>
                    <Question questionText={this.state.currentQuestionText}
                     answers={this.state.currentAnswers} 
                     correct={this.state.currentCorrect}
                     getAnswer = {this.getAnswer}
                     />
                </div>
            </div>
        );
    }
}

export default Quiz;