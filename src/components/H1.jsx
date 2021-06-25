import React, { Component } from 'react';

const styles={
    textAlign:'center',
    fontFamily: 'Exo, sans-serif'
}

export default class H1 extends Component{
    render(){
        return(
            <h1 {...this.props}style={styles}></h1>
        );
    }
   
}
