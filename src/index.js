// imports these paths from the original file in react.
import React from 'react';
import ReactDOM from 'react-dom';
// will need the ./ for the file to come straight from the current directory
import App from './App';
// when using webpac this is how we retrieve our stylesheet
import './index.css';

ReactDOM.render(
  // given the definition of an app I want to create one. replace with React.createElememt(App),
  <App />,
  document.getElementById('root')
);
