import React from 'react'
import {  Link } from 'react-router-dom'
import { MyConsumer } from './Authcomponent'

export default function Navbar() {
    const {user,loged}=MyConsumer()
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
      {!loged  ? (<li className="nav-item">
          <Link to="/login" className="nav-link active">Login</Link>
        </li>):(<li className="nav-link active">{user.id}</li>)}
        <li className="nav-item">
          <Link className="nav-link" to='/registration'>Registration</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
