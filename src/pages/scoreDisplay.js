import React, {Component} from "react";
import QuizEnd from "./quizEnd";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

class ScoreDisplay extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {finalScoreList : []};
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount()
    {
        console.log("Called Score Screen");
        const newScore = {name: this.props.newName, score: this.props.newScore};
        let scoreList = this.props.quiz.scores;
        scoreList.push(newScore);
        scoreList = scoreList.sort(function(a,b){
            return b.score-a.score;
        });
        this.setState({
            ...this.state,
            finalScoreList: scoreList
        })
    }

    handleClick(showCredits, e)
    {
        e.preventDefault();
        if(!showCredits)
        {
            this.props.returnHome();
        }
        else
        {
            this.props.showCredits();
        }
    }

    render() {
        return(
            <div className="scoreScreen">
                <h2 className="title">High scores:</h2>
                <ol className="highScoreList">
                        {this.state.finalScoreList.map((scoreEntry, index) => 
                            <li key={index}>{scoreEntry.name}: {scoreEntry.score}</li>
                        )}
                </ol>
                <button onClick={(e) => this.handleClick(false, e)} className="btn btn-danger">Return to main menu</button>
                <br></br>
                <button onClick={(e) => this.handleClick(true, e)} className="btn btn-danger">See credits</button>
            </div>
        );
    }
    
}
        
export default ScoreDisplay;