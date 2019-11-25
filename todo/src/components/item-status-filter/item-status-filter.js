/**
 * Filters
 * Реализация фильтра
 *
 * Фильтны работают на 90% так же, как поиск
 * В компоненте ItemStatusFilter мы вынесли описание кнопок в отдельный массив, чтобы не дублировать if'ы для каждой
 * Текущая активная кнопка передается, как свойство. Это продолжние идеи "контролируемых компонентов"
 *
 */

import React, { Component } from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

  buttons = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'}
  ];

  render () {

    const { filter, onFilterChange } = this.props;
    const buttons = this.buttons.map(({name, label}) => {
      const isActive = filter === name;
      const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';

      return (
        <button type="button"
                className={`btn ${clazz}`}
                key={ name }
                onClick={ () => onFilterChange(name) } >{ label }</button>
      );
    });

    return (
      <div className="btn-group">
        { buttons }
      </div>
    );
  }
};