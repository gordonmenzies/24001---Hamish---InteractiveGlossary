import './App.css';
import Description from './Component/Description';
import ProgrammingConcepts from './Component/ProgrammingConcepts';
import ProgrammingConcept from './Model/ProgrammingConcept'
import { useState } from 'react';

function App() {

  const [item, setItem] = useState([
    new ProgrammingConcept("variable",
    "a piece of code that points to stored data",
    "variables are a core part of programming and are used to name information so it can be used in a legible fashion",
    "https://scaler.com/topics/images/python-variables-1024x483.webp"),
    new ProgrammingConcept('React', "A framework for building applications built by engineers at facebook",
    "The React framework is one of the most popular frameworks and builds using componenets that are tied together with specific tools used to build react apps",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png")
])
  const [visibleItem, setVisibleItem] = useState([item[0]])

function buttonPress(conceptName) {
  let i = 0
  while (i < item.length) {
    if (item[i].name === conceptName) {
      setVisibleItem(item[i])
    }
    i++
  }
}

  return (
    <div className="App">
      <header className="App-header">
      <div id="pink">
            <h1 id="link"> Iungo Glossary</h1>
        </div>
        <div id="nav_menu">
            <div className="navbar" id="link1"> 
                <h1>Link #1</h1>
            </div>
            <div className="navbar" id="link2"> 
                <h1>Link #2</h1>
            </div>
            <div className="navbar" id="link3">
                <h1>Link #3</h1>
            </div>
        </div>
      </header>
      <body>
        <div id="outer">
          <div className="column" id="glossary">
          {item.map(concept => (
            <Description name={concept.name}
            onChange={buttonPress}
            selected={visibleItem.name}/>
            ))}
          </div>
          <div className="column" id="description">
            <ProgrammingConcepts 
            header={visibleItem.header}
            paragraph={visibleItem.paragraph}
            photo={visibleItem.photo}/>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
