import React, { Component } from 'react'
import Form from './Form.js'
import Header from './Header.js'
import Axios from 'axios'
import { Redirect } from "react-router-dom";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";


export class Edit extends Component {
    constructor(props){
        super(props);
        this.state = {
            movie: null,
            redirect: false,
        }
    }

    //function that lets the user edit a movie
    //if there is an error an error card will be displayed
    axiosPut = (state) => {
        Axios.put('http://3.120.96.16:3001/movies/' + this.props.match.params.id, state)
        .then(res => {
            this.setState({
              redirect: true
            })        
        })
        .catch((error) => {
            return <div style = {errorCardStyle}>
            <h4>I am sorry an error has occured, please return to main</h4> 
            <Link to="/" style = {linkStyle}>Main</Link>
            </div>
        })

        }
   
    //makes a call to the server and gets a single movie with the provided id in return.
    //then sets that movie values to the matching this.state values.
    componentDidMount(){
        const id = this.props.match.params.id
        Axios.get('http://3.120.96.16:3001/movies/'+id)
        .then(res => {            
            this.setState({
                movie: res.data
              })
        })
        .catch((error) => {
            return <div style = {errorCardStyle}>
            <h4>I am sorry an error has occured, please return to main</h4> 
            <Link to="/" style = {linkStyle}>Main</Link>
            </div>
        })

    }
    render() {
        if(this.state.redirect){
            return <Redirect to = '/' />
        }
        return (
            <div>
                <Helmet>
                <title>Edit</title>
                </Helmet>
                <Header />
                {this.state.movie ? <Form movie={this.state.movie} buttonText = 'Edit' axiosEvent = {this.axiosPut} /> : null}
            </div>
        )
    }
}

//////////////////////////////////////////STYLES///////////////////////////////////////////////////////////////////////////////////
const errorCardStyle = {
    width: '400px',
    height: '600px',
    border: 'solid 1px grey',
    borderRadius: '54px',
    boxShadow: '0px 10px 5px grey',
  }

  const linkStyle = {
    textdecoration: 'none',
    color: '#000000',
    backgroundColor: '#c43e00',
    fontSize: '36px',
}
export default Edit
