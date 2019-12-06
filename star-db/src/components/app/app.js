/**
 *
 * Рефакторинг компонента
 *
 * Вынес детали получения данных и адреса изображения в отдельные функции
 * В таком виде компонент может работать с разными объектами
 * Осталось решить, как сконфигурировать, какие именно данные будет отображать компонент
 *
 */

import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button';
import PeoplePage from "../people-page";
import ErrorIndicator from "../error-indicator";
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-services";
import Row from "../row";
import './app.css';

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
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

    const {
      getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage } = this.swapiService;

    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={getPerson}
        getImageUrl={getPersonImage} />
    );

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage} />
    );

    return (
      <div className="stardb-app container">
        <Header />
        <Row
          leftElement={ personDetails }
          rightElement={ starshipDetails } />
      </div>
    );
  }
}