import React, { Component } from 'react'
import Header from './Header.js'
import Axios from 'axios'
import { Link } from "react-router-dom"



export class Details extends Component {
    constructor(props){
        super(props);
        this.state = {
            movie: {}
        }
    }
   
    componentDidMount(){
        const id = this.props.match.params.id
        Axios.get('http://3.120.96.16:3001/movies/'+id)
        .then(res => {            
            this.setState({
                movie: res.data
              })
        })

    }
    render() {

        return (
            <div>
                <Header />
                <h1>title: {this.state.movie.title}</h1>
                <h2>director: {this.state.movie.director}</h2>
                <h3>rating: {this.state.movie.rating}</h3>
                <p>description: {this.state.movie.description}</p>
                <Link to = {'/edit/' + this.props.match.params.id} params={{id: this.props.match.params.id}}><button style = {buttonStyle}
                        >Edit</button></Link>
            </div>
        )
    }
}

const buttonStyle = {
    border: '1px solid #c43e00',
    marginLeft: '3px',
}

export default Details
