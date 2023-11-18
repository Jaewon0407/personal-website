import React from 'react'
import "../styles/Resume.css"
import RESUME from "../images/Screenshot 2023-11-15 at 5.07.11 PM.png"
import Navbar from "../components/Navbar"

function Resume() {
  return (
    <div className="resume-page">
        <div className="navigation-bar">
          <div className="current-role">
              <p id="role">Resume</p>
            </div>
            <Navbar />
        </div>
        <div className="resume-container">
          <img src={RESUME} className="resume" />
        </div>
    </div>
  )
}

export default Resume