import React from 'react'
import styles from './timer.module.css'

function daysUntilChristmas() {
    var today = new Date();
    var currentYear = today.getFullYear();
      var christmasDate = new Date(currentYear, 11, 24);
  
    if (today > christmasDate) {
      christmasDate = new Date(currentYear + 1, 11, 24);
    }
  
    var timeDifference = christmasDate.getTime() - today.getTime();
  
    var days = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  
    return days;
  }

export default function timer() {
  return (   
    <div className={styles.timer}>
        <div><h2>Days until christmas:</h2></div>
        <div className={styles.days}>{daysUntilChristmas()} days left!</div>
    </div>
  )
}
