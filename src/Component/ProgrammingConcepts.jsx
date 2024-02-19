import './ComponentCSS.css'

function ProgrammingConcepts(props) {

    console.log(props.header)
    return (
        <div id="core">
            <h2>{props.header}</h2>
            <h2>{props.paragraph}</h2>
            <h2>{props.photo}</h2>
        </div>
    );
  }
  
  export default ProgrammingConcepts;