// Initial packing items
import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Item from "./Item";
import Stats from "./Stats";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  //for each item in the array if the item id is not equal to the id of the item that was clicked on, then keep it in the array

  function handleDeleteItem(id){
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function handleUpdateItem(id) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearAll() {
      setItems([]);
  }


  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} /> 
      <PackingList items={items} onDeleteItem={handleDeleteItem} onUpdateItem={handleUpdateItem} />
      <button onClick={handleClearAll}>Clear All</button>
      <Stats items={items} />
      
    </div>
  );
}



export default App;