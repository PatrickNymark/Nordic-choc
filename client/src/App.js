import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Landing from './main/Landing';
import About from './main/About';
import Pieces from './main/Pieces';
import Chocolate from './main/Chocolate';
import Partnerships from './main/Partnerships';
import Login from './admin/Login';
import Awards from './main/Awards'
import Team from './main/Team';



function App() {
  return (
    <Router className="App">
        <Route exact path="/" component={Landing} />
        <Route exact path="/about" component={About} />
        <Route exact path="/pieces" component={Pieces} />
        <Route exact path="/chocolate" component={Chocolate} />
        <Route exact path="/partnerships" component={Partnerships} />
        <Route exact path="/awards" component={Awards} />
        <Route exact path="/admin/user/login" component={Login} />
        <Route exact path="/team" component={Team} />
    </Router>
  );
}

export default App;
