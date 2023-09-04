import React, { useState } from "react";
import "./App.css";

import Choices from "./components/Choices";

const App = () => {
  const [yourTurn, setYourTurn] = useState(null);
  const [compTurn, setCompTurn] = useState(null);
  const [result, setResult] = useState(null);

  const handleChoice = (choice) => {
    const compTurn = Choices[Math.floor(Math.random() * Choices.length)];
    setCompTurn(compTurn);
    console.log("comp choice is", compTurn);
    setYourTurn(choice);
    console.log(" you chose", choice);

    if (choice.name === compTurn.name) {
      setResult("This is a tie!");
    } else if (
      (choice.name === "rock" && compTurn.name === "scissors") ||
      (choice.name === "paper" && compTurn.name === "rock") ||
      (choice.name === "scissors" && compTurn.name === "paper")
    ) {
      setResult("You win!");
    } else {
      setResult("You lose!");
    }
  };

  const handlePlayAgain = () => {
    setYourTurn(null);
    setCompTurn(null);
    setResult(null);
  };

  const choiceButtons = Choices.map((choice) => (
    <button
      onClick={() => handleChoice(choice)}
      className="choice"
      key={choice.name}
    >
      {" "}
      {choice.emoji}
    </button>
  ));

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Rock. Paper. Scissors.</h1>
          <h2>Pick and play</h2>
          <div>
            <ul>{choiceButtons}</ul>
          </div>
          {compTurn && yourTurn && (
            <div>
              <span className="game">
                {" "}
                {yourTurn.emoji} <span className="vs">VS</span> {compTurn.emoji}
              </span>
              <div>
                <span className="results"> {result} </span>
              </div>
              <button className="playAgain" onClick={handlePlayAgain}>
                👉🏻 play again
              </button>
            </div>
          )}
        </header>
      </div>
    </>
  );
};

export default App;
