import React, { Component } from 'react'
import Header from './Header.js'
import Form from './Form.js'
import axios from 'axios';
import { Redirect } from "react-router-dom";



export class Add extends Component {
   constructor(props){
       super(props);
       this.state={
        redirect: false,
       }
   }

    axiosPost = (state) => {
        axios.post('http://3.120.96.16:3001/movies', state)
        .then(res => {
            this.setState({
              redirect: true
            })        
        })
        .catch((error) => {
            return <div style = {errorCardStyle}>
            <h4>I am sorry an error has occured, please try and reload the page</h4> 
            </div>
        })
    }

    render() {
        if(this.state.redirect){
            return <Redirect to = '/' />
        }
        return (
            <div>
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



export default Add