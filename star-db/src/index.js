/**
 * Пишем API-клиент
 *
 * Код который работает с сетью лучше изолировать в отдельный класс-сервер
 * Компоненты не должны знать откуда именно берутся данные
 * Такой подход упростит тестирование и поддержду кода, который работает с API
 *
 */

// Класс клиент для API
class SwapiService {

  _apiBase = 'https://swapi.co/api';

  async getResource (url) {
    const result = await fetch(`${this._apiBase}${url}`);

    if (!result.ok) {
      throw new Error(`Could not fetch ${url}, received ${result.status}`);
    }

    return await result.json();
  }

  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results;
  }

  getPerson(id) {
    return this.getResource(`/people/${id}`);
  }

  async getAllPlanets() {
    const res = await this.getResource(`/planets/`);
    return res.results;
  }

  getPlanet(id) {
    return this.getResource(`/planets/${id}`);
  }

  async getAllStarships() {
    const res = await this.getResource(`/starships/`);
    return res.results;
  }

  getStarship(id) {
    return this.getResource(`/starships/${id}`);
  }
}

const swapi = new SwapiService();

swapi.getAllStarships().then((ss) => {
  ss.forEach((s) => {
    console.log('*** ' + s.name);
  });
});

swapi.getStarship(0).then((s) => {
  console.log(s.name);
});
