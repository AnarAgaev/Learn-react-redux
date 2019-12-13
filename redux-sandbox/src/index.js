/*
* Чистые функции
*
* Чистая функция должна удовлетворять двум аргументам:
* 1. Возвращаемое значение зависит только от аргументов.
* 2. У функции нет побочных эффуктов.
*
* Функция-reducer это ЧИСТАЯ ФУНКЦИЯ!!!
*
*/

import { createStore } from "redux";

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({type: 'INC'});
store.dispatch({type: 'INC'});

