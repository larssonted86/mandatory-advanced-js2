import React, { Component } from 'react'
import Header from './Header.js'
import Form from './Form.js'
import axios from 'axios';
import { Redirect } from "react-router-dom";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";




export class Add extends Component {
   constructor(props){
       super(props);
       this.state={
        redirect: false,
       }
   }

   //function that lets the user post a movie to the server
    //if there is an error there will be an error card displayed
    axiosPost = (state) => {
        axios.post('http://3.120.96.16:3001/movies', state)
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

    render() {
        if(this.state.redirect){
            return <Redirect to = '/' />
        }
        return (
            <div>
                <Helmet>
                <title>Add</title>
                </Helmet>
                <Header />                
                <Form buttonText = 'Add' 
                axiosEvent = {this.axiosPost}
                />               
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


export default Add