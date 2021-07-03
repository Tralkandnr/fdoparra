import React, { Component } from 'react';

const styles={
    padding:'15px',
    fontFamily: 'Exo, sans-serif'
}

export default class P extends Component{
    render(){
        return(
            <p {...this.props}style={styles}></p>
        );
    }
   
}
