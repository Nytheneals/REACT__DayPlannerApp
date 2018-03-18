import React, { Component } from "react";
import TodoItem from "./todoItem";
import AddItem from "./addItem";
import "../css/index.css";

class Planner extends Component {
  state = {
    todos: [
      "Breakfast ",
      "Read the Bible",
      "Commute to work",
      "Listen to Podcast",
      "Respond to Emails"
    ]
  };

  // DELETE ITEM
  onDelete = item => {
    const updatedTodos = this.state.todos.filter(
      (value, index) => item !== value
    );
    this.setState({
      todos: updatedTodos
    });
  };
  // ADD ITEM
  onAdd = item => {
    const updatedTodos = this.state.todos;
    updatedTodos.push(item);
    this.setState({
      todos: updatedTodos
    });
  };

  render() {
    let todos = this.state.todos;
    todos = todos.map((item, index) => (
      <TodoItem item={item} key={index} onDelete={this.onDelete} />
    ));

    return (
      <div id="todo-wrapper">
        <p> Plan your Day </p>
        <ul id="todo-list">{todos}</ul>
        <AddItem onAdd={this.onAdd} />
      </div>
    );
  }
}

export default Planner;
