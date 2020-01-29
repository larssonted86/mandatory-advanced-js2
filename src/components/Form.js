import React, { Component } from 'react'


export class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            director: '',
            description:'',
            rating: '',
        } 
        this.onChange = this.onChange.bind(this)        
    }
    
    
    
    onChange(e) {
        const target = e.target;
        const name = target.name;
        const value = target.value
        this.setState({
            [name]: value
        })
    }

    render() {
        const state = this.state;
        return (
            <div>
                <form style = {formStyle}> 
                    <label><h4>Title</h4></label>
                    <input type = 'text' 
                    name = 'title'
                    placeholder = 'Title:' 
                    style = {inputStyle}
                    onChange = {this.onChange}></input>
                    <label><h4>Director</h4></label>
                    <input type = 'text' 
                    name = 'director'
                    placeholder = 'Director:'
                    style = {inputStyle}
                    onChange = {this.onChange}></input>
                    <label><h4>Description</h4></label>
                    <input type = 'text' 
                    name = 'description'
                    placeholder = 'Description:'
                    style = {inputStyle}
                    onChange = {this.onChange}></input>
                    <label><h4>Rating</h4></label>
                    <input type = 'text' 
                    name = 'rating'
                    placeholder = 'Rating:'
                    style = {inputStyle}
                    onChange = {this.onChange}></input>
                    <button style = {buttonStyle}
                    onClick = {this.props.axiosEvent(state)}>{this.props.buttonText}</button>
                </form>               
            </div>
        )
    }
}

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
