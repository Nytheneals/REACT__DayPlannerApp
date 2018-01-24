const React = require('react');
const ReactDOM = require('react-dom');
const createReactClass = require('create-react-class');

// MAIN COMPONENT
const TodoComponent = createReactClass({
  // DATA THE COMPONENT SHOULD HAVE AT THE BEGINNING OF THE APP.
  getInitialState() {
    return {
      todos: ['wash up ', 'eat', 'sleep', 'smile'],
    };
  },
  // RENDERING JSX
  render() {
    let todos = this.state.todos;
    todos = todos.map((item, index) => <TodoItem item={item} key={index} />);

    return (
      <div id="todo-list">
        <p> The busiest people have the most leisure </p>
        <ul>{todos}</ul>
      </div>
    );
  },
});

// CREATING A TODOITEM COMPONENT (NESTED COMPONENT)
const TodoItem = createReactClass({
  render() {
    return (
      <li>
        <div className="todo-item">
          <span className="item-name">{this.props.item} </span>
        </div>
      </li>
    );
  },
});

// DOM ELEMENT
const node = document.getElementById('todo_wrapper');
// INSERTING THE COMPONENT INTO THE DOM
ReactDOM.render(<TodoComponent />, node);

// TO CHANGE STATE WE USE
// setState({age:30})
