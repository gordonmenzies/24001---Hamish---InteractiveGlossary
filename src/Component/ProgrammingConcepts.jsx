import './ComponentCSS.css'
import Quiz from './Quiz';
import { useState } from 'react';


function ProgrammingConcepts(props) {

    const answers = [props.header,"Jeremy","Bonnie","Tom"]

    function quizPress(e) {
        if (e === props.header) {
            alert("congratulations you guessed correctly")
        }
        else {
            alert("unfortunately you guessed incorrectly")
        }
    }

    if (!props.header) {
        return (
            <div className="core">
            </div>
        )
    }
    else {
    return (
        <div className="core">
            <div id="information">
                <h2>{props.header}</h2>
                <h2>{props.paragraph}</h2>
                <img src={props.photo} style={{height: "100px"}}/>
            </div>
            <div id="quiz">
                <Quiz q="question"
                      answers={answers}
                      onChange={quizPress}/>
            </div>
        </div>
    );
  }
}

  export default ProgrammingConcepts;