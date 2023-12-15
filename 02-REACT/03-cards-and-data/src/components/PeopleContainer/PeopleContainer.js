import React from 'react'
import style from './PeopleContainer.module.css'

export default function PeopleContainer(props) {
  return (
    <div className={style.container}>
          <div className={style.text}><div className={style.bold}>{props.firstname}<br></br>{props.lastname}</div><div className={style.pos}>{props.pos}</div></div>
          <div className={style.image}><img src={props.img}></img></div>
    </div>
  )
}
