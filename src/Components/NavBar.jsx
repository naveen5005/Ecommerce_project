import React from 'react'
import "../CSS/Navbar.css"
import {  FaShoppingCart,  FaUser } from "react-icons/fa";
import {Link} from "react-router-dom"

const NavBar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
   <img src="./tech2.jpeg" alt="TechGys"  id='techguy' style={{height:80,width:110,borderRadius:8 ,paddingLeft:"15px"}}/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
         <Link to={"/"}  className="nav-link active" aria-current="page"> Home</Link>
        </li>
        <li className="nav-item">
         <Link to={"/men"}  className="nav-link">Men</Link>
        </li>
        <li className="nav-item">
        <Link to={"/women"}  className="nav-link">WoMen</Link>
        </li>
        <li className="nav-item">
        <Link to={"/kids"}  className="nav-link">Kids</Link>
        </li>
        <li className="nav-item">
        <Link to={"/homeliving"}  className="nav-link">Home&living</Link>
        </li>
        <li className="nav-item">
        <Link to={"/beauty"}  className="nav-link">Beauty</Link>
        </li>
        <input type="text" id='searchbox' placeholder='search for products...' style={{borderRadius:30}} />
        <li className="nav-item">
          <a className="nav-link" href="#">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Register</a>
        </li>
        <li className="nav-item" id='icon'>
        <FaShoppingCart/>
        </li>
     
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar