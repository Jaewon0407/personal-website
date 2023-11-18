import React from 'react'
import { Link } from "react-router-dom"
import "../styles/Navbar.css"

function Navbar() {
  return (
    <nav>
        <ul className="navbar-list">
            <li className="home-link"><Link to="/personal-website">Home</Link></li>
            <li className="project-link"><Link to="/personal-website/project">Project</Link></li>
            <li className="resume-link"><Link to="/personal-website/resume">Resume</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar