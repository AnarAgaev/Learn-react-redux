/**
 * Arrays as component properties
 * Массивы как свойства компонентов
 *
 * Массив можно передать как свойство
 * В JSX можно вствлять массивы элементов (не только по-одному)
 * Можно передавать ВСЕ свойства объекта в компонент используя Object Spread оператор (не перечисляя каждое)
 *
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';

import SearchPanel from './components/search-panel';
import AppHeader from './components/app-header';
import TodoList from './components/todo-list';

const App = () => {

  const todoData = [
    { label: 'Drink Coffee', active: false },
    { label: 'Make Awesome App', active: true },
    { label: 'Have a lunch', active: false }
  ];

  return (
    <div>
      <AppHeader/>
      <SearchPanel/>
      <TodoList todos={ todoData }/>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));