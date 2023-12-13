import React from 'react'
import styles from './PersonCard.module.css'

export default function PersonCard(user) {
  return (
    <div className={styles.card}>
      <div className={styles.imageDiv}><img className={styles.image} src={user.img}></img></div>
      <div className={styles.textDiv}><h2>{user.name}</h2><p>{user.title}</p></div>
    </div>
  )
}


