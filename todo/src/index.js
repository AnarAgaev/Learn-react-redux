/**
 * React project structure
 * Структура React проекта
 *
 * Один компонент - один файл
 * Все компоненты размещаются в папке components
 * Хорошие компоненты = независимые компоненты
 *
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';

import SearchPanel from './components/search-panel';
import AppHeader from './components/app-header';
import TodoList from './components/todo-list';

const App = () => {
  return (
    <div>
      <AppHeader/>
      <SearchPanel/>
      <TodoList/>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElemenntById('root'));