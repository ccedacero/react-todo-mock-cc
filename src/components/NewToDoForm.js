import React, { Component } from "react";

export default class NewToDoForm extends Component {
  state = {
    searchVal: "new to do",
  };

  handleChange = (e) => {
    this.setState({ searchVal: e.target.value });
  };

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
    this.setState({ searchVal: "new to do" });
  };

  render() {
    return (
      <div>
        <form
          className="ui form"
          onSubmit={this.newTd}
          onChange={this.handleChange}
        >
          <h1>New ToDo</h1>
          <div className="field">
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={this.state.searchVal}
              placeholder="Title"
            />
          </div>
          <button className="ui button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
