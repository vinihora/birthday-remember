import React from "react";
import "./Person.css";

export const Person = (props) => {
  const { name, img, age } = props.person;

  return (
    <div className="person">
      <img src={img} alt="" className="person-img" />
      <div className="person-text">
        <h2>{name}</h2>
        <h3>{age}</h3>
      </div>
    </div>
  );
};

export default Person;
