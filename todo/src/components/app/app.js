/**
 * Search
 * Реализация поиска
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

  Id = 100;

  state = {
    todoData: [
      this.createItem('Drink Coffee'),
      this.createItem('Make Awesome App'),
      this.createItem('Have a lunch')
    ],
    term: ''
  };

  createItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.Id++
    };
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
    const newItem = this.createItem(text);

    this.setState(({ todoData }) => {
      const newArray = [ ...todoData, newItem ];

      return {
        todoData: newArray
      };
    });
  };

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex( (el) => el.id === id );
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ];
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    });
  };

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    });
  };

  onSearchChange = (term) => {
    this.setState({ term });
  };

  search = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    })
  };

  render () {
    const { todoData, term } = this.state;
    const visibleItems = this.search(todoData, term);
    const doneCount = todoData.filter( (el) => el.done ).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={ todoCount } done={ doneCount } />
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={ this.onSearchChange } />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={ visibleItems }
          onDeleted={ this.deleteItem }
          onToggleImportant={ this.onToggleImportant }
          onToggleDone={ this.onToggleDone } />

        <ItemAdForm onItemAdded={ this.addItem }/>
      </div>
    );
  };
};