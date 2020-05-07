import React from 'react';
import { connect } from 'react-redux';
import { searchVideo } from '../actions';
import ClassNames from 'classnames';
import '../assets/styles/components/Search.scss';

const Search = props => {
  const { isHome } = props; 
  const inputStyle = ClassNames('input', {
    isHome
  });

  const handleInput = event => {
    props.searchVideo(event.target.value)
  }

  return (
    <section className="main">
      <h2 className="main__title">¿Qué quieres ver hoy?</h2>
      <input
        type="text"
        className={inputStyle}
        placeholder="Buscar..."
        name="busqueda"
        onChange={handleInput}
      />
    </section>
  );
}

const mapDispatchToProps = {
  searchVideo,
};


export default connect(null, mapDispatchToProps)(Search);