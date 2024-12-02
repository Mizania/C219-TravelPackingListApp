import React, { useState } from "react";

export default function Stats({items}) {
    const numItems = items.length;
    const numPackedItems = items.filter((item) => item.packed).length; //This line calculates the number of items that are marked as "packed" from the items array and assigns the count to the variable numPackedItems.
    const percentPacked = Math.round((numPackedItems / numItems) * 100); //This line calculates the percentage of items that are packed and assigns the value to the variable percentage. If there are no items in the list, the percentage is set to 0.
    
    return (
      <footer className="stats">
        <em>
          {percentPacked === 100 
            ? "You got everything!" 
            : `You have ${numItems} items in the list. You already packed ${numPackedItems}`}
        </em>
      </footer>
    );
  }
  