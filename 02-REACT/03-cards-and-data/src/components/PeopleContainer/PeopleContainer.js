import React, { useEffect, useState } from "react";
import style from "./PeopleContainer.module.css";
import Card from "../Card/Card";

export default function PeopleContainer(props) {
  const [people, setPeople] = useState([]);
  const [filteredPeople, setFilteredPeople] = useState([]);
  useEffect(() => {
    fetch("https://659e6ae847ae28b0bd35c8fa.mockapi.io/person").then((result) =>
      result.json().then((data) => {
        setPeople(data);
        setFilteredPeople(data);
      })
    );
  }, {});

  const filterPeople = (filter) => {
    let filtered = people.filter((person) => person.name.includes(filter));
    setFilteredPeople(filtered);
  };

  return (
    <div>
      <div className={style.header}>
        <h1>People</h1>
        <div>
          <input
            className={style.searchField}
            type="text"
            placeholder="Search"
            onChange={(element) => {
              filterPeople(element.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className={style.list}>
        <div className={style.container}>
          {filteredPeople.map((element) => {
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
    </div>
  );
}
