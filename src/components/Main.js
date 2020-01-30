import React, { Component } from 'react'
import Header from './Header.js'
import Axios from 'axios'
import { Link } from "react-router-dom"

export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          movies: [],
         }
      }


    componentDidMount(){
        console.log("FETCH");
        Axios.get('http://3.120.96.16:3001/movies/')
        .then(res => {
            console.log("FETCHED");
          this.setState({
            movies: res.data
          })
        })
      }
      
    deleteMovie = (id) =>{
        Axios.delete('http://3.120.96.16:3001/movies/' + id)
            .then(() => {
                this.setState({ movies: this.state.movies.filter(x => x.id !== id)});
            });
    }

    movieDetails= (id) =>{
        Axios.get('http://3.120.96.16:3001/movies/' + id)
        }
    
    renderTableData(){
        return this.state.movies.map((movie) => {
            const {rating, title, director,id} = movie
            return (
                <tr key={id}>
                    <td style = {tdStyle}><h4>Title:</h4> {title}</td>
                    <td style = {tdStyle}><h4>Director:</h4> {director}</td>
                    <td style = {tdStyle}><h4>rating:</h4> {rating}</td>
                    <td style = {tdStyle}>
                       <Link to = {'/details/' + movie.id} params={{id: movie.id}}><button style = {buttonStyle}
                        >Details</button></Link> 
                        <Link to = {'/edit/' + movie.id} params={{id: movie.id}}><button style = {buttonStyle}
                        >Edit</button></Link>
                        <button style = {buttonStyle}
                        onClick= {() => this.deleteMovie(movie.id)} >Remove</button>
                    </td>                    
                </tr>
            )
        })
    }    
    render() {
        return (
            <div>   
                <Header />
                <input type = 'text' 
                placeholder = 'Search'
                style= {searchStyle}></input>
                <div id='listContainer'>
                    <table style = {tableStyle}>
                        <tbody >
                            {this.renderTableData()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const tableStyle={
    textAlign: 'center',
  borderCollapse: 'collapse',
  border: '3px solid #c43e00',
  width: '100%',
}

const tdStyle = {
  border: '1px solid #c43e00',
  padding: '8px',
}

const buttonStyle = {
    border: '1px solid #c43e00',
    marginLeft: '3px',
}

const searchStyle = {
    width: '100%',
    backgroundColor: 'white',
    color: '#c43e00',
    paddingLeft: '15px',
}
export default Main
