import React, { useState, useEffect } from "react";

import Todo from "./Todo";

const Todos = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <Todo key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Todos;
