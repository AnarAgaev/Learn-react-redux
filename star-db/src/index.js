/**
 * http://swapi.co
 *
 * Как работет Fetch API
 *
 * Чтобы получить данные с сервера, нужно выполнить два вызова (каждый вернет Promise):
 *  res = await fetch(url);
 *  body = await res.json();
 *
 *  Кроме .json() есть другие функции для других типов ответа: arrayBuffer(), blob(), text(), formData()
 *
 */

const getResource = async (url) => {
  const response = await fetch(url);
  const body = await response.json();
  return body;
};

getResource('https://swapi.co/api/people/4/')
  .then((body) => {
    console.log(body);
  });

// fetch('https://swapi.co/api/people/1/')
//   .then((response) => {
//     return response.json();
//   })
//   .then((body) => {
//     console.log(body);
//   });