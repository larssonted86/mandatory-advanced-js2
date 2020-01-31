import React, { Component } from 'react'
import Header from './Header.js'
import Axios from 'axios'
import { Link } from "react-router-dom"

export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          movies: [],
          search:'',
         }
      }


    componentDidMount(){
        Axios.get('http://3.120.96.16:3001/movies/')
        .then(res => {
          this.setState({
            movies: res.data
          })
        })
        .catch((error) => {
          return <div style = {errorCardStyle}>
          <h4>I am sorry an error has occured, please try and reload the page</h4> 
          </div>
      })
      }
      
    deleteMovie = (id) =>{
        Axios.delete('http://3.120.96.16:3001/movies/' + id)
            .then(() => {
                this.setState({ movies: this.state.movies.filter(x => x.id !== id)})
            })
            .catch((error) => {
              return <div style = {errorCardStyle}>
              <h4>I am sorry an error has occured, please try and reload the page</h4> 
              </div>
          })
    }

    movieDetails= (id) =>{
        Axios.get('http://3.120.96.16:3001/movies/' + id)
        .catch((error) => {
          return <div style = {errorCardStyle}>
          <h4>I am sorry an error has occured, please try and reload the page</h4> 
          </div>
      })
        }

        onChange = (e) =>{
            this.setState({search: e.target.value})
        }
    
    renderTableData(){
        return  this.state.movies.filter((movieToSearch) => {
            let query = this.state.search.toLowerCase();
            if (!query) {
              return movieToSearch;
            } else {
              if (movieToSearch.title.toLowerCase().indexOf(query) === -1 && movieToSearch.director.toLowerCase().indexOf(query) === -1) {
                return false;
              } else {
                return true;
              }
            }
          }).map((movie) => {
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
                style= {searchStyle}
                onChange = {this.onChange}></input>
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



const errorCardStyle = {
  width: '400px',
  height: '600px',
  border: 'solid 1px grey',
  borderRadius: '54px',
  boxShadow: '0px 10px 5px grey',
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
