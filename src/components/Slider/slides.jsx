import React, { Component } from 'react';
import slide from '../../assets/img/slider.jpeg';
import './Slider.css';
import H1 from '../H1';
import P from '../P';
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
        borderRadius:'18px',
        textAlign:'center'
    },
    content:{
        display:'none',
    },
    contentDisplayed:{
        display:'block',
    },
    title:{
        display:'none',
    },
    titleDisplay:{
        display:'block'
    },
    icono:{
        fontSize:'30px',
        marginTop:'55px'
    }
    
}
export default class Slide extends Component{

    state = {onclick: false}
    pasarMouse = () => {
        this.setState({onclick:!this.state.onclick})
    }
    render(){
        return(
            <div style={styles.contenedorSlider}>
                <div style={styles.titleSlide}>
                    <div style={this.state.onclick ? styles.title:styles.titleDisplay}>
                    <H1>Fernando Parra, musico Chileno</H1>
                    </div>
                    <div style={this.state.onclick ? styles.contentDisplayed:styles.content} >
                        <H1>Mi vida y la musica</H1>
                        <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae perspiciatis ab repellat nesciunt officiis inventore sed esse dolor explicabo fuga at sapiente, omnis natus similique maxime aut minus consequuntur doloremque.</P>
                    </div>
                    <i style={styles.icono} onClick={this.pasarMouse} className={this.state.onclick ? 'fas fa-times-circle':'fas fa-chevron-circle-down'}></i>
                    
                </div>
                <img src={slide} style={styles.slider}></img>
            </div>
        );
    }
}
