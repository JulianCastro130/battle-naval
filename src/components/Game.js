import React, { useEffect } from "react";

export default function Game({ sea1, sea2, turn, setTurn, setMessage }) {

  function handleClick(e, t) {
    switch (turn) {
      case 1:
        if (sea2 === e.target.value) {
            setMessage("Barco 2 hundido")
            window.location.reload(false);
        } else {
            setMessage("Player 1 Agua")
        }
        setTurn(2)
        break;
      case 2:
        if (sea1 === e.target.value) {
            setMessage("Barco 1 hundido")
            window.location.reload(false);
        } else {
            setMessage("Player 2 Agua")
        }
        setTurn(1)
        break;
      default:
        break;
    }
  }

  return (
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
              onClick={(e) => {
                handleClick(e, turn);
              }}
            >
              {number}
            </button>
          )
        )}
      </div>
    </div>
  );
}
