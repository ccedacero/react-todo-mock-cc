import React from "react";

const ToDoCard = (props) => {
  const updateTdo = (td) => {
    const payLoad = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        title: td.title,
        completed: !td.completed,
      }),
    };
    fetch(`http://localhost:3000/todos/${td.id}`, payLoad)
      .then((r) => r.json())
      .then((newTdo) => {
        props.toggleDone(newTdo);
      });
  };
  const rmTdo = (td) => {
    props.rmTdo(td);

    const payLoad = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      // body: JSON.stringify({
      //   title: td.title,
      //   completed: !td.completed,
      // }),
    };
    fetch(`http://localhost:3000/todos/${td.id}`, payLoad)
      .then((r) => r.json())
      .then((rmTdo) => {
        // props.toggleDone(newTdo);
        console.log(rmTdo);
      });
  };

  return (
    <div className="ui card">
      <div className="content">
        <div className="header">{props.td.title}</div>
        <button
          onClick={() => updateTdo(props.td)}
          className={`ui button ${props.td.completed ? "orange" : "blue"}`}
        >
          {props.td.completed ? "Incomplete" : "Completed"}
        </button>
        <button onClick={() => rmTdo(props.td)} className="ui button red">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ToDoCard;
