/**
 * componentDidCatch()
 * componentDidCatch() - отлавливает ошибки, которые произошли в методах жизненного цикла ниже по иерархии
 * Принцип работы похож на try/catch - ошибку отлавливает близайший блок
 *
 * !Важно: НЕ ОБРАБАТЫВАЮТСЯ ОШИБКИ В EVENT LISTENER'ах и в АСИНХРОННОМ КОДЕ (запросы к серверу и т.п)
 *
 */

import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import './app.css';
import ErrorIndicator from "../error-indicator";

export default class App extends Component {

  state = {
    showRandomPlanet: true,
    selectedPerson: null,
    hasError: false
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    });
  };

  componentDidCatch(error, errorInfo) {
    console.log('componentDidCatch');
    this.setState({
      hasError: true
    });
  }

  render() {

    if (this.state.hasError) {
      return (
        <div className="mt-5">
          <ErrorIndicator />
        </div>
      );
    }

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null;

    return (
      <div className="stardb-app container">
        <Header />
        { planet }

        <div className="row mb2 button-row">
          <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}>
            Toggle Random Planet
          </button>
          <ErrorButton />
        </div>

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onPersonSelected}/>
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    );
  }
}
