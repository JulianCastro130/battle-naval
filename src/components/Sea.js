import React, { useState } from "react";
import styles from "./sea.module.css";

const initialSea1 = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

const initialSea2 = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

export default function Sea() {
  const [sea1, setSea1] = useState(initialSea1);
  const [sea2, setSea2] = useState(initialSea2);
  const [showSea1, setShowSea1] = useState(true);

  function handleClick(rowIndex, cellIndex, sea) {
    const newSea = [...sea];
    newSea[rowIndex][cellIndex] = newSea[rowIndex][cellIndex] === 0 ? 1 : 0;
    sea === sea1 ? setSea1(newSea) : setSea2(newSea);
    setShowSea1(false);
  }

  console.log(sea1);
  console.log(sea2);

  return (
    <>
      {showSea1 ? (
        <div className={styles.sea}>
          {sea1.map((row, rowIndex) =>
            row.map((cell, cellIndex) => (
              <div
                key={`${rowIndex}-${cellIndex}`}
                className={`${styles.cell} ${cell === 1 ? styles.active : ""}`}
                onClick={() => handleClick(rowIndex, cellIndex, sea1)}
              >
                {cell}
              </div>
            ))
          )}
        </div>
      ) : (
        <div className={styles.sea}>
          {sea2.map((row, rowIndex) =>
            row.map((cell, cellIndex) => (
              <div
                key={`${rowIndex}-${cellIndex}`}
                className={`${styles.cell} ${cell === 1 ? styles.active : ""}`}
                onClick={() => handleClick(rowIndex, cellIndex, sea2)}
              >
                {cell}
              </div>
            ))
          )}
        </div>
      )}
    </>
  );
}
