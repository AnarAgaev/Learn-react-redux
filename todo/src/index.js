/**
 * React project structure - move items to the folders
 *
 * Файлы компонента удобно хранить в отдельной папке
 * Кроме JS и CSS у компонента могут быть файлы с юнит-тестами и другими рессурсами
 * !Если в папке есть файл index.js, то он импортируется по-умолчанию
 *
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

ReactDOM.render(<App />, document.getElementById('root'));