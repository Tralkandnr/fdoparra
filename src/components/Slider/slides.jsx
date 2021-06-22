import React, { Component } from 'react';
import slide from '../../assets/img/slider.jpeg';

const styles = {
    slider:{
        objectFit:'cover',
        width:'100%',
        height: '600px',
    },
    contenedorSlider:{

    }
}

export default class Slide extends Component{
    render(){
        return(
            <div style={styles.contenedorSlider}>
                <img src={slide} style={styles.slider}></img>
            </div>
        );
    }
}
