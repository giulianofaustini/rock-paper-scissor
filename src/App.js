import React, { useState } from "react";
import "./App.css";

import Choices from "./components/Choices";

const App = () => {
  const [yourTurn, setYourTurn] = useState(null);
  const [compTurn, setCompTurn] = useState(null);
  const [result, setResult] = useState(null);

  const handleChoice = (choice) => {
    const compTurn = Choices[Math.floor(Math.random() * Choices.length) ]
    setCompTurn(compTurn)
    setYourTurn(choice)
    if(compTurn === yourTurn) {
      setResult('tie!')
    } else if (
      (choice.name === "rock" && compTurn.name === "scissors") ||
      (choice.name === "paper" && compTurn.name === "rock") ||
      (choice.name === "scissors" && compTurn.name === "paper")
    ) {
      setResult("You win!");
    } else {
      setResult("You lose!");
    }
  }

  
  console.log(compTurn)

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Rock. Paper. Scissors.</h1>
          <div>
            <ul>
              {Choices.map((choice) => (
                <button onClick={ () => handleChoice(choice)} className="choice" key={choice.name}> {choice.emoji}</button>
              ))}
            </ul>
          </div>
        </header>
      </div>
    </>
  );
};

export default App;

