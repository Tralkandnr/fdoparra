import React,  { Component } from 'react';
import  { MenuItems } from "./MenuItems.js";
import { MenuItems2 } from './MenuItems2.js';
import './Navbar.css';
import logo from '../../assets/img/logo.png';
import { ContenidoToggle } from './ContenigoToggle.js';

const styles = {
  navBarItems:{
    background:'rgba(48, 12, 0, 0.90)',
    height: '80px',
    display: 'flex',
    alignItems: 'center', 
    fontSize: '1.2em',
    position: 'fixed',
    width:'100%',
    zIndex:'1000',
    borderRadius:'0px 0px 18px 18px',
    
  },
  toggleDesplegado:{
    position: 'absolute',
    top:'85px',
    display: 'inline',
    zIndex: '1000',
    backgroundColor: 'rgba(48, 12, 0, 0.90)',
    paddingLeft: '10px',
    paddingRight: '50px',
    paddingBottom:'50px',
    borderRadius:'18px',
    boxShadow:' 5px 5px 5px rgba(0,0,0, 0.75)'
    
  },
  toggleOculto:{
    display:'none'
  },
  toggleLi:{
    display:'block',
    listStyleType:'none'
  }
  
}
class Navbar extends Component {
  state = {clicked: false}
  hacerClick = () => {
    this.setState({clicked:!this.state.clicked})
  }
  render() {
    return (
      <nav className="NavBarItems" style={styles.navBarItems}>
        <div className="menu-icon" onClick={this.hacerClick}>
            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <div style={this.state.clicked ? styles.toggleDesplegado:styles.toggleOculto}>
          <ul className="toggle-menu">
            {ContenidoToggle.map((item, index) => {
            return(
              <li key={index} style={styles.toggleLi}>
                <a className={item.cName} href={item.url}>{item.title}</a>
              </li>
            );
          })}
          </ul>
        </div>    
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
      </nav>
    );
  }
}

export default Navbar;
