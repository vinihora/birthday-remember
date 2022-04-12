import React from "react";
import "./Card.css";
import Person from "../Person/Person";
import { data } from "./data";

const Card = () => {
  const [people, setPeople] = React.useState(data);

  const removeIten = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <section className="background">
      <div className="card">
        <h2>{people.length} birthdays today</h2>
        <div className="persons">
          {people.map((person) => {
            return (
              <div class="flex-person">
                <Person key={person.id} person={person} />
                <button
                  type="button"
                  class="btn-2"
                  onClick={() => removeIten(person.id)}
                >
                  X
                </button>
              </div>
            );
          })}
        </div>
        <button
          className="btn"
          onClick={() => {
            setPeople([]);
          }}
        >
          Clear all
        </button>
      </div>
    </section>
  );
};

export default Card;
