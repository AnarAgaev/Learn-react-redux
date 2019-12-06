import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorButton from "../error-button";
import './item-details.css';

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
    const content = hasData ? <ItemView item={ item } image={ image }/> : null;

    return (
      <div className="item-details card">
        { spinner }
        { content }
      </div>
    )
  }
};

const ItemView = ({ item, image }) => {
  const { name, gender, birthYear, eyeColor } = item;
  return (
    <React.Fragment>
      <img className="item-image"
           src={ image }
           alt="character"/>

      <div className="card-body">
        <h4>{ name }</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{ gender }</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{ birthYear }</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{ eyeColor }</span>
          </li>
          <li className="list-group-item">
            <ErrorButton />
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};