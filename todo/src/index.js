/**
 * Props
 * Свойства компонентов
 *
 * Объект props передаётся в каждый компонент
 * const Component = (props) => {
 *   return (<i> props.name </i>);
 * }
 *
 * !В компоненты в качестве свойств можно передавать любые значения (типы данных)
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

ReactDOM.render(<App/>, document.getElementById('root'));