import React, { useEffect, useState } from "react";
import styles from "./Goalgetter.module.css";

export default function Goalgetter() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("https://api.openligadb.de/getgoalgetters/%C3%B6bl1/2023")
      .then((result) => result.json())
      .then((data) => {
        setTableData(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.position}>POSITION</div>
        <div>NAME</div>
        <div className={styles.goals}>GOALS</div>
      </div>
      {tableData.map((player, index) => (
        <div className={styles.table}>
          <div className={styles.position}>{index + 1}</div>
          <div>{player.goalGetterName}</div>
          <div className={styles.goals}>{player.goalCount}</div>
        </div>
      ))}
    </div>
  );
}
