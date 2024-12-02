import React, { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, onDeleteItem, onUpdateItem }) {
    return (
      <div className="list">
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <Item item={item} onDeleteItem={onDeleteItem} onUpdateItem={onUpdateItem} />
              </li>
          ))}
        </ul>
      </div>
    );
  }