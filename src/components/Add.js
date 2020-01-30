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
        .catch((err) => {
            alert('error!')
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




export default Add