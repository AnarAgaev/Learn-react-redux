/**
 * Routing
 *
 * Роутинг - переключение междоу виртуальными "страницами" UI приложения
 * Роутинг нужен, чтобы упростить структуру приложения и организовать навигацию
 * В Single Page Application страница, на самом деле, одна и она не перезагружается
 *
 */

import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';
import { SwapiServiceProvider } from '../swapi-service-context';
import './app.css';

export default class App extends Component {

  state = {
    swapiService: new SwapiService()
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service = swapiService instanceof SwapiService ?
                        DummySwapiService : SwapiService;
      return {
        swapiService: new Service()
      };
    });
  };

  render() {

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService} >
          <div className="stardb-app container">
            <Header onServiceChange={this.onServiceChange} />
            <RandomPlanet />
            <PeoplePage />
            <PlanetsPage />
            <StarshipsPage />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}