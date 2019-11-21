/**
 * React компоненты - пользовательские интерфейсы состоят из компонентов
 * Просто создать React компонент - Нужно создать функцию которая возвращает React элемента
 * После создани можно использовать компонент в любом мест обернув его в тег <ИМЯ_КОМПОНЕНТА/>
 *
 * !!!ОБЯЗАТЕЛЬНО имя компонента должно начинаться с большой буквы
 *
 * Пример создания компонента:
 * const Component_Name = () => {
 *   return <tag>Some component content<tag/>
 * };
 *
 * React компоненты - это функции, которые возвращают РЕ элемент
 * Должны начинаться с большой буквы
 * Имя затем можно использовать в JSX как будто это HTML элемент
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';

// Примеры создания компонента
const TodoList = () => {
  return (
    <ul>
      <li>Learn React</li>
      <li>Build Awesome app</li>
    </ul>
  );
};

const SearchPanel = () => {
  return <input type="text" placeholder="search"/>;
};

const AppHeader = () => {
  return <h1>My Todo List</h1>;
};

const App = () => {
  return (
    <div>
      <AppHeader/>
      <SearchPanel/>
      <TodoList/>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));