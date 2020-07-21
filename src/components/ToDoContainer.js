import React, { Component } from "react";
import CompletedContainer from "./CompletedContainer";
import IncompleteContainer from "./IncompleteContainer";
import NewToDoForm from "./NewToDoForm";

export default class ToDoContainer extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    fetch("http://localhost:3000/todos")
      .then((r) => r.json())
      .then((toDosObj) => this.setState({ todos: toDosObj }));
  }

  filterCmp = () => {
    return this.state.todos.filter((tdo) => tdo.completed);
  };

  filterInc = () => {
    return this.state.todos.filter((tdo) => !tdo.completed);
  };

  toggleDone = (newTd) => {
    let updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === newTd.id) {
        return newTd;
      } else {
        return todo;
      }
    });
    this.setState({ todos: updatedTodos });
  };

  updateAdded = (newTd) => {
    this.setState({ todos: [newTd, ...this.state.todos] });
  };

  rmTdo = (td) => {
    const newTodos = this.state.todos.filter((tds) => tds !== td);
    this.setState({ todos: newTodos });
  };
  // this is the non fetch version below
  // toggleDone = (id) => {
  //   let updatedTodos = this.state.todos.map((todo) => {
  //     if (todo.id === id) {
  //       return { ...todo, completed: !todo.completed };
  //     } else {
  //       return todo;
  //     }
  //   });
  //   this.setState({ todos: updatedTodos });
  // };

  render() {
    console.log(this.state);
    return (
      <div id="todo-container">
        <NewToDoForm updateAdded={this.updateAdded} />
        <CompletedContainer
          todos={this.filterCmp()}
          toggleDone={this.toggleDone}
          rmTdo={this.rmTdo}
        />
        <IncompleteContainer
          pending={this.filterInc()}
          toggleDone={this.toggleDone}
          rmTdo={this.rmTdo}
        />
      </div>
    );
  }
}
