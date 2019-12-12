/**
 * Относительные пути
 *
 * В react-router можно использовать относительные пути
 * history.push('/person'); // абсолютный путь
 * history.push('person'); // относительный путь
 *
 * !ОБЯЗАТЕЛЬНО СТАВИТЬ ЗАКРЫВАЮЩИЙ СЛЕШ В URL ССЫЛКИ
 * history.push('person');
 *  // текуший адрес - /site/catalog/
 *  // результат  - /site/catalog/person
 *
 *  // текуший адрес - /site/catalog (без обратного слеша!)
 *  // результат  - /site/person
 *
 */

import React from 'react';
import { StarshipList } from '../sw-components';
import { withRouter } from 'react-router-dom';

const StarshipsPage = ({ history }) => {
  return (
    <StarshipList
      onItemSelected={( id ) => history.push( id )} />
  );
};

export default withRouter(StarshipsPage);
