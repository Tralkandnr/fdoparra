import React,  { Component } from 'react';
import  { MenuItems } from "./MenuItems.js";
import './Navbar.css';

class Navbar extends Component {
  state= {clicked: false}



  render() {
    return (
      <nav className="NavBarItems">
        <h1 className="navbar-logo">
          FdoParra<i></i>
        </h1>
        <a><img src="\public\logov1.1.png"></img></a>
        <div className="menu-icon" onClick={this.handleClick}></div>
            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        <ul>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
