/*
* bindActionCreators()
*
* bindActionCreators() - связывает функцию action creator с функцией dispatch()
* cont { add, remove } = bindActionCreators(actions);
*
* Созданные таким способом функции делают
* сразу два действия - создание действия (actions) и отправка action в dispatch();*
*
*/

import {bindActionCreators, createStore} from "redux";
import reducer from "./reducer";
import * as actions from "./actions";

const store = createStore(reducer);
const { dispatch } = store;

const { inc, dec, rnd } =
  bindActionCreators(actions, dispatch);

document
  .getElementById('inc')
  .addEventListener('click', inc);

document
  .getElementById('dec')
  .addEventListener('click', dec);

document
  .getElementById('rnd')
  .addEventListener('click', () => {
    const payload = Math.floor(Math.random() * 10);
    rnd(payload);
});

const update = () => {
  document
    .getElementById('counter')
    .innerHTML = store.getState();
};

store.subscribe(update);