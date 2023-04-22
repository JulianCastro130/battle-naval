import React, { useState } from "react";
import Game from "./Game";
import { doc, updateDoc } from "firebase/firestore";

export default function GuessingGame({db}) {
  const [turn, setTurn] = useState(1);
  const [sea2, setSea2] = useState(null);
  const [message, setMessage] = useState("Player 1 coloca tu barco");

  async function handleClick1(e) {
        switch (turn) {
          case 1:
            await updateDoc(doc(db, "ships", "ships"), {
              locX: parseInt(e.target.value),
            });
            setMessage("Player 2 coloca tu barco");
            setTurn(2);
            break;
          case 2:
            await updateDoc(doc(db, "ships", "ships"), {
              locY: parseInt(e.target.value),
            });
            setSea2(true);
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
                  onClick={(e) => handleClick1(e)}
                >
                  {number}
                </button>
              )
            )}
          </div>
        </div>
      )}
      {sea2 && <Game turn={turn} setTurn={setTurn} setMessage={setMessage} db={db}/>}
    </div>
  );
}
