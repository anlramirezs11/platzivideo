import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchVideo } from '../actions';
import ClassNames from 'classnames';
import '../assets/styles/components/Search.scss';

const Search = props => {
  const { isHome, search } = props; 
  const inputStyle = ClassNames('input', {
    isHome
  });

  const [input, setValues] = useState({
    busqueda: '',
  });

  const handleInput = event => {
    setValues({
      ...input,
      [event.target.name]: event.target.value
    })
    props.searchVideo(input)

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

const mapStateToProps = state => {
  return {
    search: state.search,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);