import React, { Component } from 'react'
import { Redirect } from "react-router-dom";

export class Form extends Component {
    constructor(props){
        super(props);

        const movie = this.props.movie || {};
        
        this.state = {
            movie: {
                title: movie.title || '',
                director: movie.director || '',
                description: movie.description || '',
                rating: movie.rating || '',
            },
            redirect: false,
        } 

        this.onChange = this.onChange.bind(this)        
    }

    
    
    onChange(e) {
        const target = e.target;
        const name = target.name;
        const value = target.value
        this.setState({
            movie: {
                ...this.state.movie,
               [name]: value
            }
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            redirect: true
        })
    }

    render() {
        if(this.state.redirect){
            return <Redirect to = '/' />
        }
        const state = this.state.movie;
        return (
            <div>
                <form onSubmit={this.onSubmit} style = {formStyle}> 
                    <label><h4>Title</h4></label>
                    <input type = 'text' 
                    name = 'title'
                    placeholder = 'Title:' 
                    value={state.title}
                    style = {inputStyle}
                    onChange = {this.onChange}></input>
                    <label><h4>Director</h4></label>
                    <input type = 'text' 
                    name = 'director'
                    placeholder = 'Director:'
                    value={state.director}
                    style = {inputStyle}
                    onChange = {this.onChange}></input>
                    <label><h4>Description</h4></label>
                    <input type = 'text' 
                    name = 'description'
                    placeholder = 'Description:'
                    value={state.description}
                    style = {inputStyle}
                    onChange = {this.onChange}></input>
                    <label><h4>Rating</h4></label>
                    <input type = 'text' 
                    name = 'rating'
                    placeholder = 'Rating:'
                    value={state.rating}
                    style = {inputStyle}
                    onChange = {this.onChange}></input>
                    <button style = {buttonStyle}
                    onClick={() => this.props.axiosEvent(state)}>{this.props.buttonText}</button>
                </form>               
            </div>
        )
    }
}


////////////////////////////////////////////STYLES//////////////////////////////////////////////////////////////

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
}

const inputStyle = {
    border: '1px solid #c43e00',
    padding: '8px',
}

const buttonStyle = {
    border: '1px solid #c43e00',
    marginLeft: '3px',
}

export default Form
