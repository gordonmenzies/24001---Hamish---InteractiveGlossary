import './ComponentCSS.css'
import { useState } from 'react'


function Quiz(props) {

    const [tryAgain, setTryAgain] = useState(false)

    function handleButtonClick(e) {
        // the value to be passed in we want to be what is written on the button that is pressed
        props.onChange(e.target.textContent)
        console.log(props.correct)
        setTryAgain(false)
       }

       console.log(props.message)

       if ((props.message === "congratulations you guessed correctly" || 
            props.message === "unfortunately you guessed incorrectly") && (tryAgain === false)) {
        return (
            <div className="Question">
            <h3>{props.message}</h3>
            <button onClick={() => {setTryAgain(true)}}>Try Again</button>
    </div>
        )
       }
       else {
        return (
            <div className="Question">
            <h3>{props.q}</h3>
        <div id="answers">
                <h4 onClick={(e) => handleButtonClick(e,'value')}>{props.answers[0]}</h4>
                <h4 onClick={(e) => handleButtonClick(e,'value')}>{props.answers[1]}</h4>
                <h4 onClick={(e) => handleButtonClick(e,'value')}>{props.answers[2]}</h4>
                <h4 onClick={(e) => handleButtonClick(e,'value')}>{props.answers[3]}</h4>
        </div>
    </div>
        );
    }
}

  export default Quiz;