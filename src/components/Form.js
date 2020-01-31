import React, { Component } from 'react'


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
        console.log(this.state.movie)
    }

    onSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        
        const state = this.state.movie;
        return (
            <div>
                <form onSubmit={this.onSubmit} style = {formStyle}> 
                    <label><h4>Title</h4></label>
                    <input 
                    type = 'text' 
                    name = 'title'
                    placeholder = 'Title:' 
                    value={state.title}
                    style = {inputStyle}
                    onChange = {this.onChange}
                    minLength = '1'
                    maxLength = '40'
                    required></input>
                    <label><h4>Director</h4></label>
                    <input 
                    type = 'text' 
                    name = 'director'
                    placeholder = 'Director:'
                    value={state.director}
                    style = {inputStyle}
                    onChange = {this.onChange}
                    minLength = '1'
                    maxLength = '40'
                    required></input>                    
                    <label><h4>Rating: {this.state.movie.rating}</h4></label>
                    <input 
                        name = 'rating'
                        style={{width: '200px'}}
                        type="range" 
                        defaultValue = '3'
                        min="0" max="5" 
                        onChange={this.onChange}
                        step="0.5"/>
                    <label><h4>Description</h4></label>
                    <textarea 
                    type = 'text' 
                    name = 'description'
                    placeholder = 'Description:'
                    value={state.description}
                    style = {inputStyle}
                    onChange = {this.onChange}
                    minLength = '1'
                    maxLength = '300'
                    required></textarea>
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
