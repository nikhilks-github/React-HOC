import "./styles.css";
import Todos from "./componets/Todos";
import AsyncData from "./ToDoList";
import React, { useState, useEffect } from "react";

const withFeedback = (Componet) => (props) => {
  if (props.isLoading) return <div>Loading...</div>;
  if (!props.data) return <div>No Data...</div>;
  if (!props.data.length) return <div>Empty array</div>;
  return <Componet {...props} />;
};
export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      let fetchData = await data();
      setApiData(fetchData);
    })();
  }, []);
  const data = () => {
    return new Promise((res) => {
      setTimeout(() => {
        let num = Math.round(Math.random() * 1000);
        console.log("Number is ", num);
        if (num % 2 === 0) {
          res(AsyncData);
          setIsLoading(false);
        } else {
          res([]);
          setIsLoading(false);
        }
      }, 2000);
    });
  };
  return (
    <div className="App">
      <ToDoList data={apiData} isLoading={isLoading} />
    </div>
  );
}

const ToDoList = withFeedback(Todos);
