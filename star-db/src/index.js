/**
 * Обработка ошибок в Fetch API
 *
 * Fetch отклоняет (reject) Promise, только если роизошла ОШИБКА СЕТИ (сервер недоступен)
 * Чтобы проверить код разультата, можно использовать result.status
 * result.ok содержит true, если result.status содержит один из OK-статусов (200-299)
 *
 */

const getResource = async (url) => {
  const result = await fetch(url);

  if (!result.ok) {
    throw new Error(`Could not fetch ${url}, received ${result.status}`);
  }

  const body = await result.json();
  return body;
};

getResource('https://swapi.co/api/people/4asdfas/')
  .then((body) => {
    console.log(body);
  })
  .catch((error) => {
    console.error('Could not fetch', error);
  });