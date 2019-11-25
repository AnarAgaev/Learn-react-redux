/**
 * Работа с формами
 *
 *
 * Используем onChange()  чтобы получать текущее значение
 * onSubmit() - событие "отправки" формы
 * event.preventDefault() - остановить перезагрузку страницы (блокируем событие на элементе)
 *
 */


import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAdForm extends Component {

  state = {
    label: ''
  };

  onLabelChange = (event) => {
    this.setState({
      label: event.target.value
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onItemAdded(this.state.label);
  };

  render() {
    return (
      <form className="item-add-form d-flex"
            onSubmit={ this.onSubmit } >
        <input type="text"
          className="form-control"
          onChange={ this.onLabelChange }
          placeholder="What deeds to be done" />
        <button className="btn btn-outline-secondary">Add Item</button>
      </form>
    );
  };
};