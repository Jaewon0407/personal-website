import React from 'react'
import Navbar from "../components/Navbar"
import ProfilePic from "../images/profile-pic.png"
import Linkedin from "../images/linkedinLogo.png"
import Instagram from "../images/instaLogo.png"
import Twitter from "../images/twitterLogo.png"
import Github from "../images/githubLogo.png"
import Facebook from "../images/facebookLogo.png"

import "../styles/Home.css"

function Home() {
  return (
    <div className="home-page">
        <div className="navigation-bar">
            <div className="current-role">
                <p id="role">Software Developer @ SFU Rocketry</p>
                <p id="location">Surrey, BC</p>
            </div>
            <Navbar />
        </div>
        <div className="overview">
            <img className="profile-pic" src={ProfilePic} />
            <div className="description">
                <p id="name">
                    Hello my name is Jaewon!
                </p>
                <p id="major">
                    I am a 3rd year Computer Science student at Simon Fraser University.
                </p>
                <p id="interest">
                    My interest are in <span>Machine Learning</span> and <span>Computer Graphics</span>.
                </p>
            </div>
        </div>
        <div className="socials">
            <img src={Linkedin} onClick={ () => window.location.href = "https://www.linkedin.com/in/jaewonhan" } />
            <img src={Instagram} onClick={ () => window.location.href = "https://www.instagram.com/jaewon.h4" } />
            <img src={Twitter} onClick={ () => window.location.href = "https://twitter.com/Jaewonhan_" } />
            <img src={Github} onClick={ () => window.location.href = "https://github.com/Jaewon0407" }  />
            <img src={Facebook} onClick={ () => window.location.href = "https://www.facebook.com/profile.php?id=100012050711546" }  />
        </div>
    </div>
  )
}

export default Home