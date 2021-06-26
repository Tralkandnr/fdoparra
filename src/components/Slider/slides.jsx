import React, { Component } from 'react';
import slide from '../../assets/img/slider.jpeg';
import './Slider.css'
import '../H1'
import H1 from '../H1';

const styles = {
    slider:{
        objectFit:'cover',
        width:'100%',
        height: '600px',
        zIndex:'0'
    },
    titleSlide:{
        position:'absolute',
        top:'30%',
        left:'50%',
        transform:'translate(-50%)',
        fontFamily: 'Exo, sans-serif',
        backgroundColor:'rgba(10,10,10,0.10)',
        padding:'50px',
        color:'rgba(220,220,220)',
        borderRadius:'18px'
    },
    
}



export default class Slide extends Component{
    state = {onmouseout: false}
    pasarMouse = () => {
    this.setState({onmouseenter:!this.state.onmouseenter})}
    

    render(){
        return(
            <div style={styles.contenedorSlider}>
                <div style={styles.titleSlide}>
                <h1 className='titleSlide' onMouseEnter={this.pasarMouse}>Fernando Parra, musico Chileno</h1>
                <i className={this.state.onmouseenter ? 'fab fa-readme':'fas fa-chevron-circle-down'}></i>
                </div>
                <img src={slide} style={styles.slider}></img>
            </div>
        );
    }
}
