/**
 * propTypes
 *
 * Позволяет проверить значения свойств (props), которые получает компонент
 *
 * const Comp = ({ name }) => (<p>{ name }</p>);
 * Comp.propNypes = {
 *   name: (props, propName, componentName) => {...}
 * }
 *
 * Проверка срабатывает ПОСЛЕ defaultProps
 * Функция-валидатор возвращает null или объект Error
 *
 *
 * props - весь объект свойств с которым работаем
 * propName - имя того свойства для которого проводится валидация
 * componentName - название компонента для которого проводтся валидация
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';

import './random-planet.css';

export default class RandomPlanet extends Component {

  static defaultProps = {
    updateInterval: 10000
  };

  static propTypes = {
    updateInterval: (props, propName, componentName) => {
      const value = props[propName];

      if (typeof value === 'number' && !isNaN(value)) {
        return null;
      }

      return new TypeError(`${componentName}: ${propName} must be number`);
    }
  };

  static propTypes = {
    updateInterval: PropTypes.number
  };

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true
  };

  componentDidMount() {
    const { updateInterval } = this.props;
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, updateInterval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
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

  updatePlanet = () => {
    const id = Math.floor(Math.random()*17) + 2;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  render() {
    const { planet, loading, error } = this.state;

    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorIndicator/> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet}/> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }

}

const PlanetView = ({ planet }) => {

  const { id, name, population,
    rotationPeriod, diameter } = planet;

  return (
    <React.Fragment>
      <img className="planet-image"
           src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
           alt="planet" />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};