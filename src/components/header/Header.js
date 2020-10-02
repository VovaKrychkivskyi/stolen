import React from 'react';
import {links, leftImg, rightImg} from '../consts';
import './Header.scss';

function Header() {
  return (
    <div className="may-header navbar">

      <img src={leftImg} alt="leftImg" className="may-header-logo"/>

      <div className="may-header-links-wrapper">
        <div className="nav-item">
          <a href={links[0].url} className="may-header-links-wrapper-link nav-link">{links[0].name}</a>
        </div>
        <div className="nav-item">
          <a href={links[1].url} className="may-header-links-wrapper-link nav-link">{links[1].name}</a>
        </div>
        <div className="nav-item">
          <a href={links[2].url} className="may-header-links-wrapper-link nav-link">{links[2].name}</a>
        </div>
      </div>

      <img src={rightImg} alt="rightImg" className="may-header-logo"/>

    </div>
  );
};

export default Header;