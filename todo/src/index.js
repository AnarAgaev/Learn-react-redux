/**
 * JSC
 *
 * JSC похож на HTML
 * в JSC можно использовать как обычные HTML теги, так и имена React компонентов
 * если JSC код занимает несколько строк, то его нужно обернуть в круглые скобки
 * блок JSC кода создаёт React элемент, поэтому корневым элементом может быть только один элемнет
 * JSC может использовать внутти себя JS выражения, для этого их нужно обернутть в фигурные скоби {JS code}
 *
 *
 * Позволяет использовать выражения {foo.bar}
 * Атрибуты нзываются camelCase'ом
 * class = className, for = htmlFor !Исключения
 * В свойства можно передавать любое значение
 * null, undefined, true и  false в теле тегов игнорируются (не вызывая ошибки)
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
  const items = ['Drink coffee', 'Build Awesome app'];
  return (
    <ul>
      <li>{items[0]}</li>
      <li>{items[1]}</li>
    </ul>
  );
};

const SearchPanel = () => {
  const searchText = 'Type here to search';
  return <input type="text"

    className=""   //*** !Исключение в JSX атрибут class Должен называться className
    htmlFor=""     //*** !Исключение в JSX атрибут for должен называться htmlFor
                   //*** !Остальные элементы называются также как и в Html, но в camelCase

    placeholder={ searchText }
    autoComplete=""
    tabIndex=""/>;
};

const AppHeader = () => {
  const titleText = 'My Todo List';
  const headerStyle = {
    fontSize: '37px',
    color: 'red'
  };
  return <h1 style={ headerStyle } >{ titleText }</h1>;
};

const App = () => {
  const isLoggedIn = false;
  const loginBox = <span>Log in plase<br/></span>;
  const welcomeBox = <span>Welcome Back<br/></span>;

  const value = '<script>alert("");</script>';

  return (
    <div>
      { value }
      { isLoggedIn ? welcomeBox : loginBox }
      <span>{ (new Date()).toString() }</span>
      <AppHeader/>
      <SearchPanel/>
      <TodoList/>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));