/*
* UI для Redux
*
* В качестве UI может использоваться любоя бибилиотека или фреймворк
* store.dispatch() используется для обновления состояния
* store.subscribe(...) испльзуется для бновления UI
*
*/

import { createStore } from "redux";

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(reducer);

document
  .getElementById('inc')
  .addEventListener('click', () => {
  store.dispatch({type: 'INC'})
});

document
  .getElementById('dec')
  .addEventListener('click', () => {
  store.dispatch({type: 'DEC'})
});

const update = () => {
  document
    .getElementById('counter')
    .innerHTML = store.getState();
};

store.subscribe(update);


