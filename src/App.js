import React from "react";
import List from "./composition/List";
import "./App.css";

function App(prop) {
  console.log(prop);

  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {prop.store.lists.map(list => (
          <List
            cards={list.cardIds.map(id => prop.store.allCards[id])}
            header={list.header}
            key={list.id}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
