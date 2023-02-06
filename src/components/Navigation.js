import React from 'react'
import { HashLink } from 'react-router-hash-link';
import TextScramble from '@skits/react-text-scramble';
import logo from '../assets/logo/logospacing.png';

const scrollTop = () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

const NavigationItem = ({name, url="unknown"}) => {
    let activeStyle = "active-page";
    let inActiveStyle = "nav-link";
    return (
      <li class="nav-item px-3 py-3">
        <HashLink smooth to={url} onClick={CloseNav} className={({ isActive }) => inActiveStyle + (isActive? " "+activeStyle : "")}>
          {name}
        </HashLink>
      </li>
    );
  }

  const CloseNav = () => {
    document.getElementById("navbarNavDropdown").classList.remove("show");
  }

const BrandItem = () => (
    <HashLink className="navbar-brand nav-style" onClick={scrollTop}>
      <img
        src={logo}
        alt="" height="75" className="d-i"/>
    </HashLink>
  )

const Navigation = () => {

  return (
    <nav className="navbar fixed-top navbar-expand-lg nav-style pt-0 pb-0 bg-light">
    <div className="container">
      
      <BrandItem/>

      <button className="navbar-toggler btn btn-light btn-outline-light" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        <ul className="navbar-nav text-content">

          <NavigationItem 
            name="Project"
            url="/#project"
          />
          <NavigationItem name="Documents"
            url="/#documents"
          />
          <NavigationItem name="Blog"
            url="/#blog"
          />
          <NavigationItem name="Team"
            url="/#team"
          />
    
        </ul>
      </div>
    </div>
  </nav>

  )};

export default Navigation;