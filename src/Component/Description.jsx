import './ComponentCSS.css'

function Description(props) {

function handleButtonClick() {
    console.log("buttonClicked")
    props.onChange(props.name)
}

    return (
        <div id="core">
            <h2 onClick={handleButtonClick}>{props.name}</h2>
        </div>
        
    );
  }
  
  export default Description;