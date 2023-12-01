import React from 'react';
import styles from './TestList.module.css';

export default function TestList() {
  return (
    <div className={styles.testList}>
      <ul>
        <li>Cheese</li>
        <li>Milk</li>
        <li>Pork</li>
      </ul>
    </div>
  );
}
