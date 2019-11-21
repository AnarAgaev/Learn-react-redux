/**
 * Задание 1: найти ошибки в коде ниже и написать правильный код
 *
 * 1. import ReactDOM from 'react-dom';
 * 2.
 * 3. const loginBox = () => {
 * 4.   return <span class="login">Login Box</span>
 * 5. };
 * 6.
 * 7. const App = () => {
 * 8.  return (
 * 9.    <div>Header</div>
 * 10.    <loginBox/>
 * 11.  );
 * 12. };
 *
 * ReactDOM.render(App);
 */

import React from 'react';
import ReactDOM from 'react-dom';

const LoginBox = () => {
  return <span className="login">Login Box</span>
};

const App = () => {
  return (
    <div>
      <div>Header</div>
      <LoginBox/>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));