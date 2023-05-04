import React from "react";
import "./Header.scss";
import pagelogo from '../../../assets/icons/pagelogo.svg'
import searchIcon from '../../../assets/icons/search icon.svg'

export const Header = () => {
  return (
     <header>
    <div className="header-container">
      <img src={pagelogo} alt="Page Logo" />
      <div className="nav-icon-part">
        <nav>
          <a href="" className="nav-link">
            Home
          </a>
          <a href="" className="nav-link">
            Pages
          </a>
          <a href="" className="nav-link">
            Services
          </a>
          <a href="" className="nav-link">
            Project
          </a>
          <a href="" className="nav-link">
            Blog
          </a>
          <a href="" className="nav-link">
            Contact
          </a>
        </nav>
        <img src={searchIcon} alt="Search icon" />
      </div>
    </div>
  </header>
   );
 
};
