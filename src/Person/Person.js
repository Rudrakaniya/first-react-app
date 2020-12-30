import React from "react";

import "./Person.css";

const person = (props) => {
  return (
    <div className="Person">
      <p>
        Hello!! My name is {props.name}. And I am {props.age} years old.
      </p>
      <input
        className="Input"
        type="text"
        onChange={props.changed}
        value={props.name}
      ></input>
      <button className="Button" onClick={props.delete}>
        Delete
      </button>
    </div>
  );
};

export default person;
