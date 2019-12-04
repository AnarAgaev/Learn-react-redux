/**
 *
 * componentDidMount() - компонент "подключён" (DOM элементы уже на странице)
 * Используется для инициализации (получение данных, работа с DOM, и так далее)
 * Не использовать constructor() для кода который создаёт побочные эффекты
 *
 * Данный метод - это саоме подходящее место для того, чтобы проводить первоначальную инициализацию
 * компонента или делать какие-либо запросы к API и нчинать асинхронное получение данных.
 * Также в componentDidMount уже можно использовать сторонние библиотеки, т.к DOM дерево уже создано.  *
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

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 10000);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount()');
  }

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

  updatePlanet = () =>  {
    console.log('updatePlanet()');
    const id = Math.floor(Math.random() * 25) + 3;
    this.SwapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  render() {
    console.log('render()');
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