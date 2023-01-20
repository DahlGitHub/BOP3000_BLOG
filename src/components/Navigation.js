import React from 'react'
import { HashLink } from 'react-router-hash-link';
import TextScramble from '@skits/react-text-scramble';

const scrollTop = () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

const NavigationItem = ({name, url="unknown"}) => {
    let activeStyle = "active-page";
    let inActiveStyle = "nav-link";
    return (
      <li class="nav-item px-3">
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
        src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-2.png"
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
            name={
              <TextScramble 
                text="Project" 
                revealSpeed={200}
                revealText
                revealMode="typewriter" 
              />
            } 
            url="/#project"
          />
          <NavigationItem name={
              <TextScramble 
                text="Documents" 
                revealSpeed={300}
                revealText
                revealMode="typewriter" 
              />
            }  
            url="/#documents"
          />
          <NavigationItem name={
              <TextScramble 
                text="Blog" 
                revealSpeed={600}
                revealText
                revealMode="typewriter" 
              />
            }  
            url="/#blog"
          />
          <NavigationItem name={
              <TextScramble 
                text="Team" 
                revealSpeed={800}
                revealText
                revealMode="typewriter" 
              />
            }  
            url="/#team"
          />
    
        </ul>
      </div>
    </div>
  </nav>

  )};

export default Navigation;