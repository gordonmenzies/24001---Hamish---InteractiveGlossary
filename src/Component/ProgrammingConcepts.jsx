import './ComponentCSS.css'
import Quiz from './Quiz';
import { useState } from 'react';


function ProgrammingConcepts(props) {

    const answers = [props.header,"Jeremy","Bonnie","Tom"]
    const [answerMessage, setAnswerMessage] = useState("")
    mixedAnswers()

    /* A function that mixes the answers 
    */

    function mixedAnswers() {
        return answers.sort()
    }
    
    console.log(props.name)

    /* This function changes the correct answer on a button click
    */
    function quizPress(e) {
        if (e === props.header) {
            setAnswerMessage("congratulations you guessed correctly")
        }
        else {
            setAnswerMessage("unfortunately you guessed incorrectly")
        }
    }

    /* If no glossary item is loaded render nothing 
    */
    if (!props.header) {
        return (
            <div className="core">
            </div>
        )
    }
    else {
    
    /* load in the information related to the chosen glossary item if an item is selected
    */
    return (
        <div className="core">
            <div id="information">
                <h2>{props.header}</h2>
                <h2>{props.paragraph}</h2>
                <img src={props.photo} style={{height: "100px"}}/>
            </div>
            <div id="quiz">
                <Quiz q={props.name}
                      answers={answers}
                      onChange={quizPress}
                      message={answerMessage}/>
            </div>
        </div>
    );
  }
}

  export default ProgrammingConcepts;