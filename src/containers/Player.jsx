import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';
import { Redirect } from 'react-router-dom';
import NotFound from './NotFound';
import '../assets/styles/components/Player.scss'

const Player = props => {
    const { id } = props.match.params;
    const hasPlaying = Object.keys(props.playing).length > 0;

    //Se ejecuta la acción por medio de hooks
    useEffect(() => {
        props.getVideoSource(id)
    }, [])

    return hasPlaying ? (
        <div className="Player">
            <video controls autoplay>
                <source
                    src={props.playing.source}
                    type="video/mp4"
                />
            </video>
            <div className="Player-back">
                <button type="button" onClick={() => props.history.goBack()}>
                    Regresar
                </button>
            </div>
        </div>
    ) :
    <h1>Cargando Recurso .....</h1>
};

// <Redirect to="/404/" /> se puede usar para redirigir


const mapStateToProps = state => {
    return {
        playing: state.playing,
    }
}

const mapDispatchToProps = {
    getVideoSource,
}


export default connect(mapStateToProps, mapDispatchToProps)(Player);