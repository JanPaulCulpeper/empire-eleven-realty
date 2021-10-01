import React, { Component } from 'react'
import logo from '../images/logoEER.svg'
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
state= {
    isOpen:false
}
handleToggle = () =>{
    this.setState({isOpen:!this.state.isOpen})
}
    render() {
        return <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link  to="/">
                        <img className="logo" src={logo} alt="Empire Eleven Realty Logo"/>
                    </Link>
                    <button onClick={this.handleToggle} type="button" className="nav-btn">

                        <FaAlignRight className= "nav-icon"/>
                    </button>
                </div>
                <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                    <li>
                        <Link to="/properties">Properties</Link>
                    </li>
                    <li>
                        <Link to="/">About Us</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    }
}
