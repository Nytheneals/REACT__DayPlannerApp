const React = require('react');
const createReactClass = require('create-react-class');
require('./css/addItem.css');
// CREATING A TODOITEM COMPONENT (NESTED COMPONENT)
const AddItem = createReactClass({
  render() {
    return (
      <form id="add-todo" onSubmit={this.handleSubmit}>
        <input type="text" required ref="newItem" />
        <input type="submit" value="Hit me" />
      </form>
    );
  },
  // CUSTOM FUNCTIONS
  handleSubmit(e) {
    e.preventDefault();
    this.props.onAdd(this.refs.newItem.value);
  },
});

module.exports = AddItem;
