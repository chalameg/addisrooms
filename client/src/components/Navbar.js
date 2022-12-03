import React from 'react'
import { Link } from "react-router-dom";

const logout = () => {
  localStorage.removeItem("user")
  console.log('Logged out!')
}

const user = localStorage.getItem("user")

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Addis Rooms</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
      <ul className="navbar-nav mr-auto">
        {user? (<span><li className="nav-item">
          <a className="nav-link" href="/register">Register</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/login">Login</a>
        </li></span>) : <li className="nav-item">
        <Link
                  to="/"
                  onClick={logout}
                  className="text-gray-300 hover:bg-indigo-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Logout
                </Link>
        </li> }
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar