import React, { Component } from 'react'
import Form from './Form.js'
import Header from './Header.js'
import Axios from 'axios'

export class Edit extends Component {
    constructor(props){
        super(props);
        this.state = {
            movie: null
        }
    }

    axiosPut = (state) => {
        Axios.put('http://3.120.96.16:3001/movies/' + this.props.match.params.id, state)
        .catch((err) => {
            alert('error!')
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
        .catch((err) => {
            alert('this movie is no longer available!')
        })

    }
    render() {
        console.log(this.state.movie)
        return (
            <div>
                <Header />
                {this.state.movie ? <Form movie={this.state.movie} buttonText = 'Edit' axiosEvent = {this.axiosPut} /> : null}
            </div>
        )
    }
}

export default Edit
