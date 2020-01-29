import React, { Component } from 'react'
import Header from './Header.js'
import Form from './Form.js'
import axios from 'axios';


export class Add extends Component {
   

    axiosPost = (state) => {
        axios.post('http://3.120.96.16:3001/movies', state)
        }
    
    

    render() {
        return (
            <div>
                <Header />
                <Form buttonText = 'Add' 
                axiosEvent = {this.axiosPost} />
            </div>
        )
    }
}


export default Add