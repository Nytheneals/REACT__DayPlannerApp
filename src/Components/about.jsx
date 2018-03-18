const React = require('react');
const createReactClass = require('create-react-class');
// CREATING A TODOITEM COMPONENT (NESTED COMPONENT)
const About = createReactClass({
  render() {
    return <h2>All about my App</h2>;
  },
});

module.exports = About;
