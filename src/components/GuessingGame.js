import React, { useState, useEffect } from "react";

export default function GuessingGame() {
  const [message, setMessage] = useState(null);
  const [turn, setTurn] = useState(1);
  const [battleField1, setBattleField1] = useState(null);
  const [battleField2, setBattleField2] = useState(null);
  const [fire, setFire] = useState(null);

  useEffect(() => {
    if (fire) {
      if (turn === 1) {
        if (fire === battleField1) {
          setMessage("Barco 1 hundido, Player 2 gana");
      } else {
        if (fire === battleField2) {
          setMessage("Barco 2 hundido, Player 1 gana");
        }
      }
    }
  }
  }, [fire, battleField1, battleField2]);

  function handleClick1(e, t) {
    if (t === 1) {
      if (!battleField1) {
        setBattleField1(e.target.value);
      } else {
        setFire(e.target.value);
        if (fire === battleField2) {
          setMessage("Barco 2 hundido, Player 1 gana");
          window.location.reload(false);
        }
      }
      setTurn(2);
    } else {
      if (!battleField2) {
        setBattleField2(e.target.value);
      } else {
        setFire(e.target.value);
        if (fire === battleField1) {
          setMessage("Barco 1 hundido, Player 2 gana");
          window.location.reload(false);
        }
      }
      setTurn(1);
    }
  }

  return (
    <div>
      fire: {fire}
      <br />
      message: {message}
      <br />
      ship1: {battleField1}
      <br />
      ship2: {battleField2}
        {battleField1 && battleField2 ? (
          <div>Hora de atacar Player {turn}</div>
        ) : (
          <div>
            <p>Player {turn}, place the ship:</p>
          </div>
        )}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((number) => (
          <button
            key={number}
            value={number}
            onClick={(e) => handleClick1(e, turn)}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}
