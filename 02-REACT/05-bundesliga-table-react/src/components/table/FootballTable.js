import React, { useEffect, useState } from "react";
import styles from "./FootballTable.module.css";

export default function FootballTable() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("https://api.openligadb.de/getbltable/%C3%B6bl1/2023")
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
        <div className={styles.team}>Team</div>
        <div>MP</div>
        <div>W</div>
        <div>D</div>
        <div>L</div>
        <div>GF</div>
        <div>GA</div>
        <div>+/-</div>
        <div>PTS</div>
      </div>
      {tableData.map((team, index) => (
        <div className={styles.table}>
          <div className={styles.position}>{index + 1}</div>
          <div className={styles.team}>
            <img className={styles.teamIcon} src={team.teamIconUrl} alt={team.teamName + " ICON"}></img>
            <div className={styles.teamName}>{team.teamName}</div>
          </div>
          <div>{team.matches}</div>
          <div>{team.won}</div>
          <div>{team.draw}</div>
          <div>{team.lost}</div>
          <div>{team.goals}</div>
          <div>{team.opponentGoals}</div>
          <div>{team.goalDiff}</div>
          <div>{team.points}</div>
        </div>
      ))}
    </div>
  );
}
