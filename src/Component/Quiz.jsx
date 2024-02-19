import './ComponentCSS.css'


function Quiz(props) {

    function handleButtonClick(e) {
        // the value to be passed in we want to be what is written on the button that is pressed
        props.onChange(e.target.textContent)
        console.log(props.correct)
       }

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

  export default Quiz;