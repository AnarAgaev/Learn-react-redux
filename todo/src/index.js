/**
 * Collections and keys
 * Коллекции и ключи
 *
 * !Каждому элементу JSX в массиве нужно уникальное свойство key
 * React использует key чтобы эффуктивно сравнивать элементы при обновлении
 * Не стоит делать ключи из индексов массива
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
    { label: 'Drink Coffee', active: false, id: 1 },
    { label: 'Make Awesome App', active: true, id: 2 },
    { label: 'Have a lunch', active: false, id: 3 }
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