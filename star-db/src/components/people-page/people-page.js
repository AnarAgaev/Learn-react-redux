/**
 * Children
 *
 * Компоненту можно передавать одно из свойств, поместив его в тело элемента
 * <Card>How are you</Card>
 * Это свойство доступно через props.children
 * Поддерживает любые типы данных: элементы, функции, объекты и другие.
 *
 */

import React, { Component } from 'react';
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-services";
import ErrorIndicator from "../error-indicator";
import Row from '../row';
import ErrorBoundary from "../error-boundry";
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
        getData={this.swapiService.getAllPeople}>
        { i => `${i.name} (${i.birthYear})` }
      </ItemList>
    );

    const itemDetails = (
      <ItemDetails itemId={this.state.selectedPerson} />
    );

    return (
      <Row leftElement={ itemList } rightElement={ itemDetails } />
    );
  }
}
