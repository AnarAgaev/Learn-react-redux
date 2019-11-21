/**
 * React элементы
 *  const element = <h1>Hi</h1>; - пример реакт элемента
 *
 * React элементы создаются при помощи JSX синтаксиса, но могут быть и созданы по средствам нативного React
 *  на натисном React: const el = React.createElement("h1", null, 'Hello World!!!!');
 * Легковесные объекты - Virtual DOM
 * ReactDOM.render превращает React элесенты в обычные браузерные DOM элементы и рендерит их на странице
 *
 * При создании любого реакт документа/скрипта/файла:
 * 1. Ипортируем библеотеки React и ReactDOM
 * 2. Создаём react элементы в JSX синтаксисе
 * 3. Рендерим/отрисовываем react элементы на странице
 *
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';

const el = (
  <div>
    <h1>My Todo List</h1>
    <input type="text" placeholder="search"/>
    <ul>
      <li>Learn React</li>
      <li>Build Awesome app</li>
    </ul>
  </div>
);

ReactDOM.render(el, document.getElementById('root'));