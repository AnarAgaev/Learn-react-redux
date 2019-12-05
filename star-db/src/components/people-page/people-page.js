/**
 * componentDidCatch() - использование на практике
 *
 * Чтобы определить границы ошибок, нужны компоненты, которые будут разделять независимые блоки приложения
 * componentDidCatch() принимает для аргумента error и info с дополнительной информацией об источникке ошибки
 *
 */

import React, { Component } from 'react';
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import SwapiService from "../../services/swapi-services";
import ErrorIndicator from "../error-indicator";
import './people-page.css';

export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: null,
    hasError: false
  };

  componentDidCatch(error, errorInfo) {
    debugger;
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

    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList
            onItemSelected={this.onPersonSelected}
            getData={ this.swapiService.getAllPeople }/>
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    );
  }
}
