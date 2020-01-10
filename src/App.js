import React from "react";
import List from "./composition/List";
import store from "./store";
import "./App.css";

//App component pulls from store data passed in at index.js,
// It loops over the lists inside the store data,
// Then for each list obj, it returns a List component, which has
// the cardIds in it. It will then loop over the ids in the obj,
// and return allCards keys with the same id

const newRandomCard = () => {
  const id =
    Math.random()
      .toString(36)
      .substring(2, 4) +
    Math.random()
      .toString(36)
      .substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: "lorem ipsum"
  };
};

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
      key === keyToOmit ? newObj : { ...newObj, [key]: value },
    {}
  );
}

class App extends React.Component {
  state = {
    data: store
  };

  handleAddItem = listId => {
    const newCard = newRandomCard();
    let newList = this.state.data.lists.map(list => {
      if (list.id === listId) {
        return {
          ...list,
          cardIds: [...list.cardIds, newCard.id]
        };
      }
      return list;
    });
    this.setState({
      data: {
        lists: newList,
        allCards: {
          ...this.state.data.allCards,
          // if you want to set a key in an object using a variable,
          //you have to use brackets around the variable like so:
          [newCard.id]: newCard
        }
      }
    });
  };

  handleDeleteItem = itemId => {
    const { lists, allCards } = this.state.data;
    const newList = lists.map(list => ({
      ...list,
      cardIds: list.cardIds.filter(id => id !== itemId)
    }));
    const newAllCards = omit(allCards, itemId);
    this.setState({
      data: { lists: newList, allCards: newAllCards }
    });
  };

  render() {
    const cardList = this.state.data.lists.map(list => (
      <List
        id={list.id}
        cardIds={list.cardIds.map(id => this.state.data.allCards[id])}
        header={list.header}
        key={list.id}
        onDeleteItem={this.handleDeleteItem}
        onAddItem={this.handleAddItem}
      />
    ));

    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">{cardList}</div>
      </main>
    );
  }
}
export default App;
