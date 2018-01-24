const React = require('react');
const ReactDOM = require('react-dom');
const createReactClass = require('create-react-class');
const TodoItem = require('./todoItem');
const AddItem = require('./addItem');
const About = require('./about');
require('./css/index.css');

import { Router, Route, browserHistory } from 'react-router';

// ROUTER
const App = createReactClass({
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={TodoComponent} />
        <Route path="/about" component={About} />
      </Router>
    );
  },
});

// MAIN COMPONENT
const TodoComponent = createReactClass({
  // DATA THE COMPONENT SHOULD HAVE AT THE BEGINNING OF THE APP.
  getInitialState() {
    return {
      todos: [
        'Breakfast ',
        'Read the Bible',
        'Commute to work',
        'Listen to Podcast',
        ' Respond to Emails',
      ],
    };
  },
  // RENDERING JSX
  render() {
    let todos = this.state.todos;
    todos = todos.map((item, index) => (
      <TodoItem item={item} key={index} onDelete={this.onDelete} />
    ));

    return (
      <div id="todo-list">
        <p> Plan your Day </p>
        <ul>{todos}</ul>
        <AddItem onAdd={this.onAdd} />
      </div>
    );
  },
  // DELETE ITEM
  onDelete(item) {
    const updatedTodos = this.state.todos.filter((value, index) => item !== value);
    this.setState({
      todos: updatedTodos,
    });
  },
  // ADD ITEM
  onAdd(item) {
    const updatedTodos = this.state.todos;
    updatedTodos.push(item);
    this.setState({
      todos: updatedTodos,
    });
  },
  // LIFECYCLE FUNCTIONS

  componentWillMount() {
    console.log('ComponentwillMount');
  },
});

// DOM ELEMENT
const node = document.getElementById('todo-wrapper');
// INSERTING THE COMPONENT INTO THE DOM
ReactDOM.render(<TodoComponent />, node);

// TO CHANGE STATE WE USE-->
// setState({age:30})
