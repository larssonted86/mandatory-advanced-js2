import React from 'react';
import axios from 'axios';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Main from './components/Main.js'
import Add from './components/Add.js'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
     }
  }

  componentDidMount(){
    axios.get('http://3.120.96.16:3001/movies/')
    .then(res => {
      console.log(res)
      this.setState({
        movies: res.data
      })
    })
  }
  

  render(){
    return (
      <Router>
      <div className="App">
        <Route path="/" exact>
          <Main  movies = {this.state.movies}/>
        </Route>
        <Route path="/add">
          <Add  movies = {this.state.movies}/>
        </Route>
      </div>
      </Router>
      );
  }
}

export default App;
