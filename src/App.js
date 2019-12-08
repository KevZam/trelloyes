import React from "react";
import List from "./composition/List";
import "./App.css";

//App component pulls from store data passed in at index.js,
// It loops over the lists inside the store data,
// Then for each list obj, it returns a List component, which has
// the cardIds in it. It will then loop over the ids in the obj,
// and return allCards keys with the same id

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
            cardKeys={list.cardIds.map(id => prop.store.allCards[id])}
            header={list.header}
            key={list.id}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
