import React from "react";
import style from "./Card.module.css"

export default function Card(props) {
  return (
    <div>
      <div className={style.container}>
        <div className={style.text}>
          <div className={style.bold}>
            {props.firstname}
            <br></br>
            {props.lastname}
          </div>
          <div className={style.pos}>{props.pos}</div>
        </div>
        <div className={style.image}>
          <img src={props.img}></img>
        </div>
      </div>
    </div>
  );
}
