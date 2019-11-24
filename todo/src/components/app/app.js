/**
 * setState() удаление элемента часть 2
 *
 * setState() !Ни в коем случае не должен изменять текущий state
 * методы которые изменяют (mutate) массив использовать нельзя
 *
 * newArr = [
 *  ...oldArr.slice(0, idx),
 *  ...oldArr.slice(idx +1)
 * ];
 * Не изменяет oldArray
 *
 *
 */

import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import './app.css';

export default class App extends Component {

  state = {
    todoData: [
      { label: 'Drink Coffee', id: 1 },
      { label: 'Make Awesome App', id: 2 },
      { label: 'Have a lunch', id: 3 }
    ]
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      // !!! Нельзя исопльзовать прямое удаление элементов из state, так как это очень русурсоёмко
      // !!! todoData.splice(idx, 1);

      const newArray = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1)
      ];

      return {
        todoData: newArray
      };
    });
  };

  render () {
    return (
      <div className="todo-app">
        <AppHeader toDo={ 1 } done={ 3 } />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={ this.state.todoData }
          onDeleted={ this.deleteItem } />
      </div>
    );
  };
};