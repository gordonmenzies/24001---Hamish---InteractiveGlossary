import './ComponentCSS.css'

function Description(props) {

function handleButtonClick() {
    console.log("buttonClicked")
    props.onChange(props.name)
}

    console.log(props.selected)

    return (
        <div className="core" id="glossaryItem"
        style={props.selected === props.name ? {backgroundColor : "rgb(188, 188, 188)",
                                                border: "solid 2px rgb(201, 100, 100)"} : {backgroundColor : "white"}}>
            <h2 onClick={handleButtonClick}>{props.name}</h2>
        </div>
        
    );
  }
  
  export default Description;