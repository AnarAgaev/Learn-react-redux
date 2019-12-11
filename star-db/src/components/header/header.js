/**
 * Link
 *
 * Чтобы переключать страницы, нужно использовать компонент Link из react-router
 * <Link to="/example-page">example-page</Link>
 * Link работает почти как тег <a>, но он не перезагружает страницу (и при этом обновляет URL в адресной строке)
 *
 */

import React from 'react';
import { Link } from "react-router-dom";
import './header.css';

const Header = ({ onServiceChange }) => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="#/">
          StarDB
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <Link to="/people">People</Link>
        </li>
        <li>
          <Link to="/planets">Planets</Link>
        </li>
        <li>
          <Link to="/starships">Starships</Link>
        </li>
      </ul>

      <button
          onClick={onServiceChange}
          className="btn btn-primary btn-sm">
        Change Service
      </button>
    </div>
  );
};

export default Header;