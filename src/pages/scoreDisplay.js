import React, {Component} from "react";
import QuizEnd from "./quizEnd";

function ScoreDisplay(props)
{
    return(
        <div className="scoreScreen">
            <h2 className="title">High scores:</h2>
            <ol className="highScoreList">
                    {props.scoreTable.map((scoreEntry, index) => 
                        <li key={index}>{scoreEntry.name}: {scoreEntry.score}</li>
                    )}
            </ol>
            <button>Return to main menu</button>
        </div>
    );
}
        
export default ScoreDisplay;