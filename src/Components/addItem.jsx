import React, { Component } from "react";
import "../css/addItem.css";
// CREATING A TODOITEM COMPONENT (NESTED COMPONENT)
class AddItem extends Component {
  newItem = React.createRef();
  // CUSTOM FUNCTIONS
  handleSubmit = e => {
    e.preventDefault();
    console.log(e);
    this.props.onAdd(this.newItem.current.value);
    //THIS RESETS THE FORM FIELDS TO EMPTY
    e.currentTarget.reset();
  };

  render() {
    return (
      <form id="add-todo" onSubmit={this.handleSubmit}>
        <input
          type="text"
          required
          ref={this.newItem}
          placeholder="Add a task"
        />
        <input type="submit" value="Add" />
      </form>
    );
  }
}

export default AddItem;
