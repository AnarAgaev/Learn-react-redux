/*
* mapDispatchToProps() - в виде объекта
*
* Action Creators не обязательно должен быть чистой функцией
*
* Если вторй аргумент connect() это объект connect(mapStateToProps, actions)(MyComponent);
* То результат будет таким же, как для кода:
* connect(
*   mapStateToProps,
*   (dispatch) => bindActionCreators(actions, dispatch))
*   (MyComponent);
*
*/

import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from '../actions';

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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// В данном случае можно было бы просто использовать export default connect(mapStateToProps, actions)(Counter);
// т.к mapDispatchToProps возвращает объект, а connect умеет работать с обхектами