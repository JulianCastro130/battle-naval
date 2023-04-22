import React, {useState, useEffect} from "react";
import { collection, getDocs } from "firebase/firestore";

export default function Game({ db, turn, setMessage, setTurn }) {
  const [sea1, setSea1] = useState(null);
  const [sea2, setSea2] = useState(null);

  useEffect(() => {
    
    const fetchShips = async () => {
      const shipsCollectionRef = collection(db, "ships");
      const shipsSnapshot = await getDocs(shipsCollectionRef);
      const firstShipData = shipsSnapshot.docs[0]._document.data.value.mapValue.fields;

      setSea1(firstShipData.locX.integerValue);
      setSea2(firstShipData.locY.integerValue);
    };

    fetchShips();
  }, [db]);

  console.log(sea1);
  console.log(sea2);

  function handleClick(e, t) {
    switch (turn) {
      case 1:
        if (sea2 === e.target.value) {
          setMessage("Barco 2 hundido");
          window.location.reload(false);
        } else {
          setMessage("Player 1 Agua");
        }
        setTurn(2);
        break;
      case 2:
        if (sea1 === e.target.value) {
          setMessage("Barco 1 hundido");
          window.location.reload(false);
        } else {
          setMessage("Player 2 Agua");
        }
        setTurn(1);
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
                handleClick(e);
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
