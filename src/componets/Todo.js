import React from "react";

const BaseTodo = ({ item: props }) => {
  return (
    <div>
      <ul>
        <div>{props.id}</div>
        <div>{props.task}</div>
        <div>{props.due}</div>
      </ul>
    </div>
  );
};

export default BaseTodo;
