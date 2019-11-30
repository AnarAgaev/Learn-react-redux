/**
 * Обработка ошибок сети в компоненте
 *
 * В state добавляем поле, где будем хранить флаг: нужно ли отобразить ошибку
 * В зависимости от эттго флага, отображем ошибку, или нормальное содержимое компонента
 * Внимательно: с async/await - код с await может выбрости Error Нужно обязательно учесть возможность ошибки асинхронноо кода
 *
 */

import React, { Component } from 'react';
import SwapiService from '../../services/swapi-services';
import './random-planet.css';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator'

export default class RandomPlanet extends Component {

  SwapiService = new SwapiService();

  state = {
    planet: {},
    loading: true
  };

  constructor() {
    super();
    this.updatePlanet();
  };

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
      error: false
    });
  };

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    });
  };

  updatePlanet() {
    const id = Math.floor(Math.random() * 25) + 2;
    this.SwapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  render() {
    const { planet, loading, error } = this.state;

    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={ planet }/> : null;

    return (
      <div className="random-planet jumbotron rounded">
        { errorMessage }
        { spinner }
        { content }
      </div>
    );
  };
};


const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;
  return (
    <React.Fragment>
      <img className="planet-image"
           src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
      <div>
        <h4>{ name }</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{ population }</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{ rotationPeriod }</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{ diameter }</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};