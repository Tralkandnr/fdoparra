import React, { Component } from 'react';

const styles={
    padding:'15px'
}

export default class P extends Component{
    render(){
        return(
            <p {...this.props}style={styles}></p>
        );
    }
   
}
