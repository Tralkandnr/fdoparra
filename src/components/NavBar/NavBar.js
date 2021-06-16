import React,  { Component } from 'react';
import  { MenuItems } from "./MenuItems.js";
import { MenuItems2 } from './MenuItems2.js';
import './Navbar.css';
import logo from '../../assets/img/logo.png';
import {Iconos} from './Iconos';

class Navbar extends Component {
  state= {clicked: false}

  render() {
    return (
      <nav className="NavBarItems">
        <div className="menu-icon" onClick={this.handleClick}></div>
            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
         <ul className="menu1">
          {MenuItems2.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <a className="logo"><img src={logo}></img></a>
        <ul className="menu2">
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
        <ul className="social-icons">
        {Iconos.map((item, index)=>{
              return (
                <li key={index}>
                  <i class={item.cName} href={item.url}></i>
                </li>
              );
            })}</ul>
      </nav>
    );
  }
}

export default Navbar;
