import React from "react";
import './Dashboard.css';
export default function DisplayList(props) {
  return (
    <div className="display">
      <li>
        <button
        className="delete_btn"
          onClick={(id) => {
            props.onSelect(props.id);
          }}
        >
          Remove
        </button>{" "}
        {props.itemname}
      </li>
    </div>
  );
}
