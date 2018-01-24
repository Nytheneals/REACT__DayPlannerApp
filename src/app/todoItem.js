const React = require('react');
const createReactClass = require('create-react-class');
require('./css/todoItem.css');
// CREATING A TODOITEM COMPONENT (NESTED COMPONENT)
const TodoItem = createReactClass({
  render() {
    return (
      <li>
        <div className="todo-item">
          <span className="item-name">{this.props.item}</span>
          <span className="item-remove" onClick={this.handleDelete}>
            X
          </span>
        </div>
      </li>
    );
  },
  handleDelete() {
    this.props.onDelete(this.props.item);
  },
});

module.exports = TodoItem;
