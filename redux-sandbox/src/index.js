/*
* Reducer
*
* Reducer это обычная функция:
* (state, action) => newState
* Если state - undefined, то нужно вернуть первоначальный (initial) state
* Если тип action неизвестен - нужно вернуть state без изменений
*
*/

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;
    default:
      return state;
  }
};

let state = reducer(undefined, {});
state = reducer(state, {type: 'INC'});

console.log(state)