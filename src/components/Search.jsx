import React from 'react';
import { connect } from 'react-redux';
import { searchVideo } from '../actions';
import ClassNames from 'classnames';
import '../assets/styles/components/Search.scss';

const Search = props => {
  const { isHome, search } = props; 
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

const mapStateToProps = state => {
  return {
    search: state.search,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);