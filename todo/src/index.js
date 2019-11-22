/**
 * Connection css
 * Как подключить css стили
 *
 * CSS фреймворки (такие как Bootstrap) можно подключить в index.html
 * CSS для компонентов удобно хранить в отдельных файлах: 1 компонент = 1 css файл
 * WebPack поддерживает импорт CSS файлов из JavaScript модулей
 *
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
import ItemStatusFilter from './components/item-status-filter';

import './index.css';

const App = () => {

  const todoData = [
    { label: 'Drink Coffee', important: false, id: 1 },
    { label: 'Make Awesome App', important: true, id: 2 },
    { label: 'Have a lunch', important: false, id: 3 }
  ];

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList todos={todoData} />
    </div>
  );
};

ReactDOM.render(<App />,
  document.getElementById('root'));