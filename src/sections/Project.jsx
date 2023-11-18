import React from 'react'
import Navbar from "../components/Navbar"
import "../styles/Project.css"

// GPS GUI
import GUI1 from "../images/Screenshot 2023-11-10 at 1.17.14 PM.png"
import GUI2 from "../images/Screenshot 2023-11-10 at 1.17.46 PM.png"
import GUI3 from "../images/Screenshot 2023-11-10 at 1.18.15 PM.png"

// Goal App
import GOAL1 from "../images/GoalApp-LoginPage.png"
import GOAL2 from "../images/GoalApp-RegisterPage.png"
import GOAL3 from "../images/GoalApp-UserGoalPage.png"
import GOAL4 from "../images/GoalApp-UserProfilePage.png"

// Fish Survival game
import FISH1 from "../images/Screenshot 2023-11-10 at 1.23.54 PM.png"
import FISH2 from "../images/Screenshot 2023-11-10 at 1.24.15 PM.png"
import FISH3 from "../images/Screenshot 2023-11-10 at 1.24.38 PM.png"
import FISH4 from "../images/Screenshot 2023-11-10 at 1.26.55 PM.png"

function Project() {
  return (
    <div className="project-page">
        <div className="navigation-bar">
            <div className="current-role">
              <p id="role">Project</p>
            </div>
            <Navbar />
        </div>
        <ul className="projects">
          <li className="project1">
            <div className="project-info">
              <p className="project-name">
                GPS Graphical User Interface
              </p>
              <p className="project-description">
                Created an interactive graphical user interface (GUI) for a satellite-based GPS system, enabling real-time monitoring and visualization of the movements of a satellite designed and built in-house.
              </p>
              <p className="tech-stack">
                <span className="tech-stack-text">Tech Stack:</span> React, Node.js, Express.js, OpenLayers API, Axios
              </p>
            </div>
            <div className="project-images">
              <img className="image" src={GUI1} />
              <img className="image" src={GUI2} />
              <img className="image" src={GUI3} />
            </div>
          </li>
          <li className="project2">
            <div className="project-info">
              <p className="project-name">
                Goal Tracking App
              </p>
              <p className="project-description">
                Developed a Goal App that manages and monitors user goals through CRUD operations with a secure authentication system for login and registration.
              </p>
              <p className="tech-stack">
                <span className="tech-stack-text">Tech Stack:</span>  React, Redux, Node.js, Express.js, MongoDB
              </p>
            </div>
            <div className="project-images">
              <img className="image" src={GOAL1} />
              <img className="image" src={GOAL2} />
              <img className="image" src={GOAL3} />
              <img className="image" src={GOAL4} />
            </div>
          </li>
          <li className="project3">
            <div className="project-info">
              <p className="project-name">
                Fish Survival Game
              </p>
              <p className="project-description">
                Created a web-based 2D Fish Survival Game where the player grows from eating smaller fishes while avoiding getting eaten by bigger fishes, incorporating Algorithms and Object Oriented Programming.
              </p>
              <p className="tech-stack">
                <span className="tech-stack-text">Tech Stack:</span> JavaScript, HTML, CSS
              </p>
            </div>
            <div className="project-images">
              <img className="image" src={FISH1} />
              <img className="image" src={FISH2} />
              <img className="image" src={FISH3} />
              <img className="image" src={FISH4} />
            </div>
          </li>
        </ul>
    </div>
  )
}

export default Project