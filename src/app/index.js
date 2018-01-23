var React = require("react");
var ReactDOM = require("react-dom");
var createReactClass = require("create-react-class");

//Create a component
var TodoComponent = createReactClass({
  getInitialState: function() {
    return {
      todos: ["wash", "eat", "sleep"]
    };
  },
  render: function() {
    return (
      <div>
        <h1>
          Name:<span>{this.state.todos[0]}</span>
        </h1>
        <h1>
          Job:<span>{this.state.todos[1]}</span>
        </h1>
        <h1>
          Location:<span>{this.state.todos[2]}</span>
        </h1>
      </div>
    );
  }
});

// DOM ELEMENT
var node = document.getElementById("todo_wrapper");
ReactDOM.render(<TodoComponent />, node);
