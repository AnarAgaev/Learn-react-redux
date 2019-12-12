/**
 * Опциональные параметры
 *
 * В path параметры могут быть опциональными. Если параметр опциональный, полсе него в URL нужно поставить знак вопроса.
 * <Route path="/people/:id?" ... />
 *
 * Приложение должно позволять перезагружать страницы, или передавать URL другим пользователям
 *
 * Адрес должен содержать ID открытого элемента (тогда открыв URL пользователь попадает на тот-же "экран")
 *
 */

import React from 'react';
import { withRouter } from 'react-router-dom';
import { PersonDetails, PersonList } from '../sw-components';
import Row from '../row';

const PeoplePage = ({ history, match }) =>{

  const { id } = match.params;

    return (
      <Row
        left={<PersonList onItemSelected={ (id) => history.push(id) } />}
        right={<PersonDetails itemId={ id } />} />
    );
};

export default withRouter(PeoplePage);