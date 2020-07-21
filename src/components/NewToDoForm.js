import React, { Component } from "react";

export default class NewToDoForm extends Component {
  newTd = (e) => {
    e.preventDefault();
    const payLoad = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        title: e.target.title.value,
        completed: false,
      }),
    };
    fetch("http://localhost:3000/todos", payLoad)
      .then((r) => r.json())
      .then((newTd) => {
        this.props.updateAdded(newTd);
      });
  };

  render() {
    return (
      <div>
        <form className="ui form" onSubmit={this.newTd}>
          <h1>New ToDo</h1>
          <div className="field">
            <label>Title</label>
            <input type="text" name="title" placeholder="Title" />
          </div>
          <button className="ui button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
