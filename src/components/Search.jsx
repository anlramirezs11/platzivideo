import React from 'react';
import ClassNames from 'classnames';
import '../assets/styles/components/Search.scss';

const Search = ({isHome}) => {
  const inputStyle = ClassNames ('input', {
    isHome 
  });
  return (
    <section className="main">
      <h2 className="main__title">¿Qué quieres ver hoy?</h2>
      <input type="text" className={inputStyle} placeholder="Buscar..." />
    </section>
  );
}

export default Search;