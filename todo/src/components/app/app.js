/**
 * Данные в React приложении
 *
 * Централизировать управление данными хорошая проктика
 * !!!Если данные нужно использовать в нескольких компонентах - их нужно хранить в родительском компоненте
 * Чтобы "поднять" данные вверх по иерархии компонентов нужн использовать события
 *
 *
 */

import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAdForm from '../item-add-form';
import './app.css';

export default class App extends Component {

  maxId = 100;

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

      const newArray = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1)
      ];

      return {
        todoData: newArray
      };
    });
  };

  addItem = (text) => {
    const newItem = {
      label: text,
      id: this.maxId++
    };

    this.setState(({ todoData }) => {
      const newArray = [ ...todoData, newItem ];

      return {
        todoData: newArray
      };
    });
  };

  onToggleImportant = (id) => {
    console.log('Toggle important',  id);
  };

  onToggleDone = (id) => {
    console.log('Toggle done', id);
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
          onDeleted={ this.deleteItem }
          onToggleImportant={ this.onToggleImportant }
          onToggleDone={ this.onToggleDone } />

        <ItemAdForm onItemAdded={ this.addItem }/>
      </div>
    );
  };
};