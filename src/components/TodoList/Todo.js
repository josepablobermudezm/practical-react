import React from "react";

export default (props) => (
  <div style={{  border: "1px solid grey", width: "25%"}}>
    <div
      style={{
        textDecoration: props.todo.complete ? "line-through" : "",
        margin: "10px",
        float: "left",
      }}
      onClick={props.toggleComplete}
    >
      {props.todo.text}
    </div>
    <button className="buttonSpecial" onClick={props.handleDeleteTodo}>X</button>
  </div>
);
