import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import HomePage from './main/HomePage';
import About from './main/About';
import Pieces from './main/Pieces';


function App() {
  return (
    <Router className="App">
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/pieces" component={Pieces} />
    </Router>
  );
}

export default App;
