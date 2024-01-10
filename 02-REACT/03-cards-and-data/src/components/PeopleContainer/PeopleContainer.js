import React, { useEffect, useState } from "react";
import style from "./PeopleContainer.module.css";
import Card from "../Card/Card";

export default function PeopleContainer(props) {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    fetch("https://659e6ae847ae28b0bd35c8fa.mockapi.io/person").then((result) =>
      result.json().then((data) => {
        setPeople(data);
      })
    );
  }, {});

  return (
    <div>
      <h1>People</h1>
      <div className={style.container}>
        {people.map((element) => {
          return (
            <Card
              firstname={element.name}
              pos={element.position}
              img={element.avatar}
            ></Card>
          );
        })}
      </div>
    </div>
  );
}
