/**
 * Search
 * Реализация поиска
 *
 * Компонент App получил новый элемент state, в котором мы храним текст для поиска
 * Перед тем, как отображать элемнеты в render() отфильтровал нужные
 * Компонент SearchPanel генерирует событие onSearchChange на каждое нажатие клавиши (чтобы App обновил список)
 *
 */

import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
  state = {
    term: ''
  };

  onSearchChange = (event) => {
    const term = event.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  };

  render() {
    return (
      <input type="text"
             className="form-control search-input"
             placeholder="type to search"
             value={ this.state.term }
             onChange={ this.onSearchChange } />
    );
  }
};