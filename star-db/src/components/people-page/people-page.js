/**
 * Свойства-элементы
 *
 * В качестве значения свойтва можно передавать React элемента
 * <Card title={ <h1>Hi</h1> } />
 * Так можно создавать элементы-"контейнеры"
 * ... или элементы, которые умеют выбирать, что рендерить в зависимости от условия (загрузка, ошибка, и тому подобное)
 *
 */

import React, { Component } from 'react';
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-services";
import ErrorIndicator from "../error-indicator";
import Row from '../row'
import './people-page.css';

export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 5,
    hasError: false
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true
    });
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {

    if (this.state.hasError) {
      return (
        <div className="mt-5">
          <ErrorIndicator />
        </div>
      );
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={ this.swapiService.getAllPeople }
        renderItem={({ name, gender, birthYear }) => (
          ` ${name} (${gender}, ${birthYear})`)} />
    );

    const itemDetails = (
      <ItemDetails itemId={this.state.selectedPerson} />
    );

    return (
      <Row leftElement={ itemList } rightElement={ itemDetails } />
    );
  }
}
