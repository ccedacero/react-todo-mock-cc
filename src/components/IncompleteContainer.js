import SearchBarComponent from "./SearchBarComponent";
import ToDoCard from "./ToDoCard";
import React, { Component } from "react";

export default class IncompleteContainer extends Component {
  // When implementing the search bar, consider implementing state here to make it dynamic.
  // i.e everytime you type in the input field, the ToDos are immediately filtered

  // state = {
  //     searchTerm: ""
  // }

  // When implementing the search bar, consider implementing a function that handles setState and pass this function down to
  // SearchBarComponent

  // handleOnChange = () => {

  // }

  // When implementing the search term, consider implementing a function that FILTERs the todos.
  // To determine which to filter, find out which ToDo title INCLUDES the search term typed.

  render() {
    return (
      <div>
        <h1>Incomplete Todos</h1>
        {/* <SearchBarComponent handleOnChange={this.handleOnChange}/> */}
        {this.props.toDos.map((td) => (
          <ToDoCard
            key={td.title}
            todo={td}
            toggle={this.props.toggle}
            dltTodo={this.props.dltTodo}
          />
        ))}
      </div>
    );
  }
}
