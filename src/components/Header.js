import React, { Component } from 'react'
import {
    Link
  } from "react-router-dom";

export class Header extends Component {
    render() {
        return (
            <header style = {headerStyle}>
                <Link to="/" style = {linkStyle}>Main</Link>
                ||                
                <Link to="/Add" style = {linkStyle}>Add</Link>
            </header>
        )
    }
}



//////////////////////////STYLES///////////////////////////

const headerStyle={
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontSize: '36px',
    color: '#000000',
    backgroundColor: '#c43e00',
    height: '75px',
    paddingLeft: ' 50px',
    paddingRight: ' 50px',

}
const linkStyle = {
    textdecoration: 'none',
    color: '#000000',
    backgroundColor: '#c43e00',
    fontSize: '36px',
}

export default Header
