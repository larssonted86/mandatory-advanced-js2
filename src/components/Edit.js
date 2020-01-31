import React, { Component } from 'react'
import Form from './Form.js'
import Header from './Header.js'
import Axios from 'axios'
import { Redirect } from "react-router-dom";

export class Edit extends Component {
    constructor(props){
        super(props);
        this.state = {
            movie: null,
            redirect: false,
        }
    }

    axiosPut = (state) => {
        Axios.put('http://3.120.96.16:3001/movies/' + this.props.match.params.id, state)
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

export default Edit
