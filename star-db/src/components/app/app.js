/**
 * Компонент Switch (обработка несуществующих адресов)
 *
 * Компонент Switch оборачивает другие компоненты (Route и Redirect)
 * <Switch>
 *   <Route path="/books" ...>
 *   <Route path="/blog" ...>
 * </Switch>
 *
 * Switch отрисует ТОЛЬКО ПЕРВЫЙ ЭЛЕМЕНТ, который соответствует адресу
 * Route без свойства path срабатывает всегда, можно использовать это свойство для отрисовки какого либо React элемента вместо 404 страницы
 *
 */

import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import StarshipDetails from "../sw-components/starship-details";
import {
  PeoplePage,
  PlanetsPage,
  StarshipsPage,
  LoginPage,
  SecretPage } from '../pages';
import { SwapiServiceProvider } from '../swapi-service-context';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect } from 'react-router-dom';
import './app.css';

export default class App extends Component {

  state = {
    swapiService: new SwapiService(),
    isLoggedIn: false
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    });
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
    const { isLoggedIn } = this.state;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService} >
          <Router>
            <div className="stardb-app container">
              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet />

              <Switch>
                <Route path="/"
                       render={() => <h2>Welcome to StarDB</h2>}
                       exact={true} />
                <Route path="/people/:id?" component={PeoplePage} />
                <Route path="/planets" component={PlanetsPage} />
                <Route path="/starships" exact component={StarshipsPage} />
                <Route path="/starships/:id"
                       render={({ match }) => {
                         const { id } = match.params;
                         return <StarshipDetails itemId={ id }/>
                       }} />
                <Route
                  path="/login"
                  render={() => (
                    <LoginPage
                      isLoggedIn={ isLoggedIn }
                      onLogin={ this.onLogin } />
                  )} />
                <Route
                  path="/secret"
                  render={() => (
                    <SecretPage isLoggedIn={ isLoggedIn }/>
                  )} />
                  <Route render={() => <h2>Page not found!</h2>}/>
                  { /* <Redirect to="/404" Можно испльзовать отдельную страницу, если ни один из предыдущих Route не сработал */ }
              </Switch>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}