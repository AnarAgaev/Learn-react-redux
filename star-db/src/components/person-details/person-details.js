/**
 *
 * componentDidUpdate(prevProps, prevState) - Использование на практике
 *
 * Использовали этот метод, чтобы подгузить новые данные, когда personId изменился
 *
 * !ОЧЕНЬ ВАЖНО: если в этом методе может изменяться state - обязательно нужно проверить,
 * какое именно свойство именилось, иначе компонент рискует уйт в "вечный цикл" обновления
 *
 */

import React, { Component } from 'react';

import './person-details.css';
import SwapiService from "../../services/swapi-services";

export default class PersonDetails extends Component {

  swapiService = new SwapiService();

  state = {
    person: null
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const { personId } = this.props;
    if (!personId) {
      return;
    }

    this.swapiService
      .getPerson(personId)
      .then((person) => {
        this.setState({ person });
      });
  }

  render() {

    if (!this.state.person) {
      return <span>Select a person from a list</span>;
    }

    const { id, name, gender,
      birthYear, eyeColor } = this.state.person;

    return (
      <div className="person-details card">
        <img className="person-image"
             src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
             alt="character"/>

        <div className="card-body">
          <h4>{ name }</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{ gender }</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{ birthYear }</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{ eyeColor }</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
};