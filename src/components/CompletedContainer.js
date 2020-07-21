import React from "react";
import ToDoCard from "./ToDoCard";

const CompletedContainer = (props) => {
  const renderTodo = () => {
    return props.todos.map((td) => (
      <ToDoCard
        rmTdo={props.rmTdo}
        td={td}
        key={td.id}
        toggleDone={props.toggleDone}
      />
    ));
  };
  return (
    <div>
      <h1>Completed Todos</h1>
      {renderTodo()}
    </div>
  );
};

export default CompletedContainer;
