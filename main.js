var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
  <h1>Привет React и JSX!</h1>,
  document.getElementById('hello-react-jsx')
);

ReactDOM.render(
  React.createElement('h1', null, 'Привет React!'),
  document.getElementById('hello-react-simple')
);
