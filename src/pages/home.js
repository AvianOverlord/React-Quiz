import React from "react";

class Home extends React.Component{
    handleClick(e) 
    {    
        e.preventDefault();
        alert('The quiz link was clicked.');
    }

    render ()
    {
        return(
            <header className="App-header">
                <h1>William's Quiz Site</h1>
                <ol> 
                    <li><button onClick={this.handleClick}>Revolutions Quiz</button></li>
                    <li><button>Vampire Quiz</button></li>
                    <li><button>Civil War Quiz</button></li>
                </ol>
        </header>
        )
    }

    componentDidMount()
    {
        document.title = "William's Quizzes"
    }
}

export default Home;