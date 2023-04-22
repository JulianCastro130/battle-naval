import React, { useState } from "react";
import Game from "./Game";

export default function GuessingGame() {
  const [turn, setTurn] = useState(1);
  const [sea1, setSea1] = useState(null);
  const [sea2, setSea2] = useState(null);
  const [fire, setFire] = useState(null);
  const [message, setMessage] = useState("Player 1 coloca tu barco");

  function handleClick1(e, t) {
        switch (turn) {
          case 1:
            setSea1(e.target.value);
            setMessage("Player 2 coloca tu barco");
            setTurn(2);
            break;
          case 2:
            setSea2(e.target.value);
            setMessage("Player 1 ataca")
            setTurn(1);
            break;
          default:
            break;
        }
  }

  return (
    <div>
      <p>Es el turno del player {turn}</p>
      <h1>{message}</h1>
      {!sea2 && (
        <div>
          <div
            style={{
              height: "600px",
              display: "grid",
              gridTemplateColumns: "repeat(4, 200px)",
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
              (number) => (
                <button
                  key={number}
                  value={number}
                  onClick={(e) => handleClick1(e, turn)}
                >
                  {number}
                </button>
              )
            )}
          </div>
        </div>
      )}
      {sea2 && <Game sea1={sea1} sea2={sea2} turn={turn} setTurn={setTurn} setMessage={setMessage} />}
    </div>
  );
}
