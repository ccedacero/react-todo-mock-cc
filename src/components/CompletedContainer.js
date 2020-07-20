import React from "react";
import ToDoCard from "./ToDoCard";
import { render } from "@testing-library/react";

const CompletedContainer = (props) => {
  //   let renderTodos = () => {

  //   };

  render();
  return (
    <div>
      <h1>Completed Todos</h1>
      {props.toDos.map((td) => (
        <ToDoCard
          key={td.title}
          todo={td}
          toggle={props.toggle}
          dltTodo={props.dltTodo}
        />
      ))}
    </div>
  );
};

export default CompletedContainer;
