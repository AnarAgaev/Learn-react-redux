/**
 * Методы жизненного цикла компонентов
 *
 * Жизненный цикл (lifecycle): Инициализация => Обновление => Удаление
 * На каждом этапе (жизненном цикле) есть несколько методов для работы именно в эттом жизненном цикле
 *
 * MOUNTING - когда компонент создаётся и первый раз отображается на странице
 * -------
 * constructor() => render() => componentDidMount()
 *
 * UPDATES - когда компонент отобразился и он может получать обновления (апдейты могут проходить благодаря двум событиям: пришили новые пропсы или обновился стэйт)
 * -------
 * New Props
 *              => render() => componentDidUpdate()
 * setState()
 *
 * UNMOUNTING - когда компонент больше не нужен и он удаляется со страницы
 * -------
 * componentWillUnmount()
 *
 * ERROR - когда компонент получает какую-либо ошибку, которая не была поймана ранее
 * -------
 * componentDidCatch()
 *
 * Помимо описанных методов жизненого цикла React компонентов
 *  componentDidMount() - компонент "подключён" (DOM элементов уже на странице)
 *  componentDidUpdate() - компонент обновился
 *  omponentWillUnmount() - компонент будет удалён (но DOM ещё на странце)
 *  componentDidCatch() - когда в компоненте (или в его child-компонентах) произошла ошибка
 *  сущцествует множество других методов, но это самые основные, остальные используются гораздо реже
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
    console.log('constructor()');
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 10000);
  };

  componentDidMount() {
    console.log('componentDidMount()');
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