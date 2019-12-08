import React from "react";
import Card from "./Card";
import "./List.css";

function List(props) {
  console.log(props);
  const cardsList = props.cards;
  const rendCards = cardsList.map((card, i) => (
    <Card key={card.id} title={card.title} content={card.content} />
  ));

  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {rendCards}
        <button type="button" className="List-add-button">
          + Add Random Card
        </button>
      </div>
    </section>
  );
}

export default List;
