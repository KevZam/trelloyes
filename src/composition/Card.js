import React from "react";
import "./Card.css";

// the Card component will be passed the title and content from
// the List object when it is generated

function Card(props) {
  return (
    <div className="Card">
      <button type="button" onClick={() => props.onDeleteCard(props.id)}>
        delete
      </button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
}

export default Card;

// person = {name: 'michael jackson', age: 60}

// const {name, age} = person

// const {name} = person
