/*
* react-redux и функция connect()
*
* react-redux упрощает интеграцию react + redux
* Provider дулает store доступным всему дереву компонентов (через контекст)
* connect() - компонент высшего порядка, который передает значения из store  в компонент
* const mapStateToProps = (state) => {
*   return { name: state.name, age: state.age };
* };
*
*/

import React from "react";
import { connect } from "react-redux";

const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div className="jumbotron">
      <h2>{counter}</h2>
      <button
        onClick={dec}
        className="btn btn-primary btn-lg">DEC</button>
      <button
        onClick={inc}
        className="btn btn-primary btn-lg">INC</button>
      <button
        onClick={rnd}
        className="btn btn-primary btn-lg">RND</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state
  };
};

export default connect(mapStateToProps)(Counter);