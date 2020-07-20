import React from "react";

const ToDoCard = (props) => {
  return (
    <div className="ui card">
      <div className="content">
        <div className="header">{props.todo.title}</div>
        {
          // console.log(props.completed)
          props.todo.completed ? (
            <button
              onClick={() => props.toggle(props.todo)}
              className="ui button orange"
            >
              Incomplete
            </button>
          ) : (
            <button
              onClick={() => props.toggle(props.todo)}
              className="ui button blue"
            >
              Complete
            </button>
          )
          /* The button will require some conditional rendering. 
            If the button is under the Incomplete Container, button should be blue and text should say Complete
            If the button is under Complete Container, button should be orange and text should say Incomplete 
            */
        }

        <button
          onClick={() => props.dltTodo(props.todo)}
          className="ui button red"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ToDoCard;
