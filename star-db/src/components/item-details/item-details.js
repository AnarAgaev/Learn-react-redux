/**
 *
 * Работы с props.children
 *
 * Компонент может решать, как именно использовать children
 * Функция React.Children.map() упрощает обработку props.children
 * Child элементы можно заменять, оборачивать в другие компоненты или скрывать (если вернуть null)
 *
 */

import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorButton from "../error-button";
import './item-details.css';

export const Record = ({ field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{ label }</span>
      <span>{ field }</span>
    </li>
  );
};

export default class ItemDetails extends Component {
  state = {
    item: this.props.itemId,
    loading: true,
    image: null
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  onItemLoaded = (item) => {
    this.setState({
      item: item,
      loading: false,
      image: this.props.getImageUrl(item)
    });
  };

  updateItem() {
    const { itemId, getData } = this.props;
    if (!itemId) {
      return;
    }

    this.setState({
      item: {},
      loading: true
    });

    getData(itemId).then(this.onItemLoaded);
  }

  render() {
    if (!this.state.item) {
      return <span>Select a item from a list</span>;
    }

    const { item, loading, image } = this.state;
    const spinner = loading ? <Spinner /> : null;
    const hasData = !loading;
    const content = hasData ? <ItemView item={ item } image={ image } children={this.props.children}/> : null;

    return (
      <div className="item-details card">
        { spinner }
        { content }
      </div>
    )
  }
};

const ItemView = ({ item, image, children }) => {
  return (
    <React.Fragment>
      <img className="item-image"
           src={ image }
           alt="character"/>

      <div className="card-body">
        <h4>{ item.name }</h4>
        <ul className="list-group list-group-flush">
          {
            React.Children.map(children, (child, idx) => {
              return <li>{idx}</li>;
            })
          }
          <li className="list-group-item">
            <ErrorButton />
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};