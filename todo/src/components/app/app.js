/**
 * setState() add element
 * добавление элемента в setState
 *
 * arr.push() - тоже изменение массива (нельзя выплнять на массивах из state)
 *
 * добавить элемент в конец массива
 * const newArr = [...oldArr, newItem];
 *
 * добавить элемент в начало массива
 * const newArr = [newItem, ...oldArr];
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
    // generate id
    const newItem = {
      label: text,
      id: this.maxId++
    };

    // add element in array
    this.setState(({ todoData }) => {
      const newArray = [ ...todoData, newItem ];

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

        <ItemAdForm onItemAdded={ this.addItem }/>
      </div>
    );
  };
};