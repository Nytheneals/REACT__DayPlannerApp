import React, { Component } from "react";
import "../css/todoItem.css";

// CREATING A TODOITEM COMPONENT (NESTED COMPONENT)
class TodoItem extends Component {
  handleDelete = () => {
    this.props.onDelete(this.props.item);
  };
  render() {
    return (
      <li>
        <div className="todo-item">
          <span className="item-name">{this.props.item}</span>
          <span className="item-remove" onClick={this.handleDelete}>
            <i class="fa fa-trash" aria-hidden="true" />
          </span>
        </div>
      </li>
    );
  }
}

export default TodoItem;
