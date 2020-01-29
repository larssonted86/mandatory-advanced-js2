import React, { Component } from 'react'
import Header from './Header.js'

export class Main extends Component {
    

    renderTableData(){
        return this.props.movies.map((movie) => {
            const {rating, title, director,id} = movie
            return (
                <tr key={id}>
                    <td style = {tdStyle}><h4>Title:</h4> {title}</td>
                    <td style = {tdStyle}><h4>Director:</h4> {director}</td>
                    <td style = {tdStyle}><h4>rating:</h4> {rating}</td>
                    <td style = {tdStyle}>
                        <button style = {buttonStyle}>Details</button>
                        <button style = {buttonStyle}>Edit</button>
                        <button style = {buttonStyle}>Remove</button>
                    </td>                    
                </tr>
            )
        })
    }
    render() {
        console.log(this.props.movies)
        return (
            <div>   
                <Header />
                <input type = 'text' 
                placeholder = 'Search'
                style= {searchStyle}></input>
                <div id='listContainer'>
                    <table style = {tableStyle}>
                        <tbody >
                            {this.renderTableData()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const tableStyle={
    textAlign: 'center',
  borderCollapse: 'collapse',
  border: '3px solid #c43e00',
  width: '100%',
}

const tdStyle = {
  border: '1px solid #c43e00',
  padding: '8px',
}

const buttonStyle = {
    border: '1px solid #c43e00',
    marginLeft: '3px',
}

const searchStyle = {
    width: '100%',
    backgroundColor: 'white',
    color: '#c43e00',
    paddingLeft: '15px',
}
export default Main
