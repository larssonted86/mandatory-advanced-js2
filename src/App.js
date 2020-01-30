import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Main from './components/Main.js'
import Add from './components/Add.js'
import Details from './components/Details.js'
import Edit from './components/Edit.js'



class App extends React.Component {
    

  render(){
    return (
      <Router>
      <div className="App">
        <Route path="/" exact component={Main} />
        <Route path="/add" component={Add} />
        <Route path="/details/:id" component={Details} />
        <Route path="/edit/:id" component={Edit} />
      </div>
      </Router>
      );
  }
}

export default App;
