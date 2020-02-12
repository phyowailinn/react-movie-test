import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="nav-bar">
      <div className="nav-logo pull-left">
        <Link to="/"><img src="https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg" /></Link>
      </div>
      <span className="header-slogan hidden-xs pull-left">Best Movies in World</span>
      <div className="main-nav-links hidden-sm hidden-xs">
        <ul className="nav-links nav-link-guest">
          <li><a className="login-nav-btn" href="#"> Login </a> &nbsp;|&nbsp; <a className="register-nav-btn" href="#"> Register </a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
