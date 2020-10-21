import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import M from  'materialize-css/dist/js/materialize.min.js';

import useDocumentScrollThrottled from '../functions/useDocumentScrollThrottled';



export default function Navbar() {
  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  const MINIMUM_SCROLL = 80;
  const TIMEOUT_DELAY = 400;

  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setShouldShowShadow(currentScrollTop > 2);

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });

  const shadowStyle = shouldShowShadow ? 'shadow' : '';
  const hiddenStyle = shouldHideHeader ? 'hidden' : '';

  useEffect(() => {
    let sidenav = document.querySelector('#slide-out');
    M.Sidenav.init(sidenav, {});
  },[])

  return (
    <div>
      <nav className={`header ${shadowStyle} ${hiddenStyle}`}>
        <div className="nav-wrapper">
          <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <a href="/" className='title' >Adventures with Angela</a>
          <ul className="nav-links hide-on-med-and-down center">
            <li><a href="sass.html">Locations</a></li>
            <li><a href="sass.html">Life Style</a></li>
            <li><a href="sass.html">Blog</a></li>
            <li><a href="badges.html">About</a></li>
            <li><a href="collapsible.html">Contact</a></li>
          </ul>
          <ul className="hide-on-med-and-down">
            <li><a href="sass.html"><i className="material-icons">search</i></a></li>
            <li><a href="sass.html"><i className="fab fa-twitter"></i></a></li>
            <li><a href="sass.html"><i className="fab fa-pinterest"></i></a></li>
            <li><a href="sass.html"><i className="fab fa-facebook"></i></a></li>
            <li><a href="badges.html"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="slide-out">
        <li><a href="sass.html">Locations</a></li>
        <li><a href="sass.html">Life Style</a></li>
        <li><a href="sass.html">Blog</a></li>
        <li><a href="badges.html">About</a></li>
        <li><a href="collapsible.html">Contact</a></li>
      </ul>

      <ul id="dropdown1" className="dropdown-content">
        <li><a href="#!">one</a></li>
        <li><a href="#!">two</a></li>
        <li className="divider"></li>
        <li><a href="#!">three</a></li>
      </ul>
    </div>
  )
}
