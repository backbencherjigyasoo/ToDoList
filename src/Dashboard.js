import React, { useState } from "react";
import DisplayList from "./DisplayList";
import "./Dashboard.css";
function Dashboard() {
  const [inputvalue, setinputvalue] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    setinputvalue(e.target.value);
  };
  const handleClick = () => {
    setItems((oldItems) => {
      return [...oldItems, inputvalue];
    });
    setinputvalue("");
  };
  const DeleteItems = (id) => {
    console.log("deleted");
    setItems((oldItems) => {
      return oldItems.filter((arrayElement, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div>
      <div className="container">
          <h1>To Do List</h1>
        
          <input
            className="inputitems"
            type="text"
            placeholder="Add Items here"
            value={inputvalue}
            onChange={handleChange}
          />
          <button className="add_items" onClick={handleClick}>Add Items</button>
        <div>
          {items.map((itemvalue, index) => {
            return (
              <DisplayList
                itemname={itemvalue}
                onSelect={DeleteItems}
                key={index}
                id={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
