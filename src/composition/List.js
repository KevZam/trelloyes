import React from "react";
import Card from "./Card";
import "./List.css";

// The List component takes the cardKeys passed in from the App.js
// and for each card key, accesses the obj inside that card key
// and creates a Card component using the card key to access the
// data inside that key:obj

function List(props) {
  const cards = props.cardIds.map(card => (
    <Card
      key={card.id}
      id={card.id}
      title={card.title}
      content={card.content}
      onDeleteCard={props.onDeleteItem}
    />
  ));

  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {cards}
        <button
          type="button"
          className="List-add-button"
          onClick={() => props.onAddItem(props.id)}
        >
          + Add Random Card
        </button>
      </div>
    </section>
  );
}

export default List;
