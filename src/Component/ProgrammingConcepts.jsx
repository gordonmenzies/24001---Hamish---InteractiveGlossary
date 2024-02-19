import './ComponentCSS.css'


function ProgrammingConcepts(props) {
    return (
        <div className="core"id="description">
            <h2>{props.header}</h2>
            <h2>{props.paragraph}</h2>
            <img src={props.photo} style={{height: "100px"}}/>
        </div>
    );
  }

  export default ProgrammingConcepts;