import React, { Component } from 'react';
import {Iconos} from './NavBar/Iconos';

const styles={
    socialIcons:{
        display:'block',
        textAlign:'end',
        marginRight:'15px',
        position:'fixed',
        zIndex:'1000',
        top:'100px',
        right:'-15px',
        padding:'20px',
        listStyle:'none',
        background:'rgba(48, 12, 0, 0.90)',
        borderRadius:'18px 0px 0px 18px',
        boxShadow:' 5px 5px 5px rgba(0,0,0, 0.75)'
      }
}

export default class StickyIcons extends Component{
    render(){
        return(
            <ul style={styles.socialIcons}>
        {Iconos.map((item, index)=>{
              return (
                <li key={index}>
                  <i class={item.cName} href={item.url}></i>
                </li>
              );
            })}</ul>
        );
    }
   
}
