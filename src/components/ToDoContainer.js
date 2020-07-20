import React, { Component } from "react";
import CompletedContainer from "./CompletedContainer";
import IncompleteContainer from "./IncompleteContainer";
import NewToDoForm from "./NewToDoForm";

export default class ToDoContainer extends Component {
  state = {
    completedTodos: [],
    incompleteTodos: [],
  };
  componentDidMount() {
    fetch("http://localhost:3000/todos")
      .then((resp) => resp.json())
      .then((todoObj) => {
        const completed = todoObj.filter((td) => td.completed);
        const pending = todoObj.filter((td) => !td.completed);
        this.setState({ completedTodos: completed, incompleteTodos: pending });
      });
  }

  cmpTodo = (td) => {
    console.log(td);
    const newTodos = this.state.incompleteTodos.filter((tdo) => tdo !== td);
    td.completed = true;
    this.setState({
      incompleteTodos: newTodos,
      completedTodos: [td, ...this.state.completedTodos],
    });
  };

  icpTodo = (td) => {
    const newTodos = this.state.completedTodos.filter((tdo) => tdo !== td);
    td.completed = false;
    console.log(newTodos);
    this.setState({
      completedTodos: newTodos,
      incompleteTodos: [td, ...this.state.incompleteTodos],
    });
  };

  dltTodo = (td) => {
    if (td.completed) {
      const newTodos = this.state.completedTodos.filter((tdo) => tdo !== td);
      this.setState({ completedTodos: newTodos });
    } else {
      const newTodos = this.state.incompleteTodos.filter((tdo) => tdo !== td);
      this.setState({ incompleteTodos: newTodos });
    }
  };

  newTdo = (e) => {
    e.preventDefault();
    const newTask = {
      title: e.target.title.value,
      completed: false,
    };
    // debugger;
    this.setState({
      incompleteTodos: [newTask, ...this.state.incompleteTodos],
    });
  };
  render() {
    return (
      <div id="todo-container">
        <NewToDoForm newTdo={this.newTdo} />
        <CompletedContainer
          toDos={this.state.completedTodos}
          toggle={this.icpTodo}
          dltTodo={this.dltTodo}
        />
        <IncompleteContainer
          toDos={this.state.incompleteTodos}
          toggle={this.cmpTodo}
          dltTodo={this.dltTodo}
        />
      </div>
    );
  }
}
