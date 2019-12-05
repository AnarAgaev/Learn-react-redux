/**
 * Свойства-элементы
 *
 * В качестве значения свойтва можно передавать React элемента
 * <Card title={ <h1>Hi</h1> } />
 * Так можно создавать элементы-"контейнеры"
 * ... или элементы, которые умеют выбирать, что рендерить в зависимости от условия (загрузка, ошибка, и тому подобное)
 *
 */

import React from 'react';
import './row.css';

const Row = ({ leftElement, rightElement }) => {
  return (
    <div className="row mb2">
      <div className="col-md-6">
        { leftElement }
      </div>
      <div className="col-md-6">
        { rightElement }
      </div>
    </div>
  );
};

export default Row;