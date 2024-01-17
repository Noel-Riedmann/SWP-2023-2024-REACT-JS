import React from 'react'
import styles from './Header.module.css'
import { useNavigate } from 'react-router-dom'
import logo from './images/logo.png'

export default function SiteHeader() {
    const navigate = useNavigate();
  return (
    <div className={styles.header}>
            <img src={logo} alt="Bundesliga-Logo" onClick={()=> {navigate("/")}} className={styles.logo}></img>
            <div className={styles.title}>
                <div className={styles.buTxt}>Bundesliga</div>
                <div className={styles.oeTxt}>Österreich</div>
            </div>
            <div className={styles.menu}>
                <button className={styles.menuButton} onClick={()=> {navigate("/table")}} >TABLE</button>
                <button className={styles.menuButton} onClick={()=> {navigate("/goalgetter")}} id="goalgetterButton">GOALGETTER</button>
            </div>

        </div>
  )
}

