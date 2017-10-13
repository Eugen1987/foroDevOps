import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';

const App = () => {
  <Route path="/" exact component={HomePage} />;
};

export default App;
