import React, { Component } from 'react';
import slide from '../../assets/img/slider.jpeg';
import './Slider.css'

const styles = {
    slider:{
        objectFit:'cover',
        width:'100%',
        height: '600px',
        zIndex:'0'
    }
}

export default class Slide extends Component{
    render(){
        return(
            <div style={styles.contenedorSlider} className='slide'>
                <img src={slide} style={styles.slider}></img>
            </div>
        );
    }
}
