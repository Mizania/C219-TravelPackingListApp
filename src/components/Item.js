import React, { useState } from "react";

export default function Item({ item, onDeleteItem, onUpdateItem }) {
    const { id, description, quantity, packed } = item;
    return (
      <li>
        <input 
          type="checkbox" 
          value={item.packed} 
          onChange={()=> onUpdateItem(item.id)} 
        />
      <span style={{ textDecoration: packed ? "line-through" : "none" }}>
        {description} ({quantity})
      </span>
      <button id='delete' onClick={() => onDeleteItem(item.id)}>X</button>
      </li>
    );
  }