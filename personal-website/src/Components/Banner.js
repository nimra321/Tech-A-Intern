import React from 'react'
import Logo from "../images/Logoo.PNG"

function Banner() {
  return (
    <div className="header">
        <div class="container">
              <nav>
                  <img src={Logo} alt="img" className="logo" />
                  <ul>
                      <li><a href="#">Home</a></li>
                      <li><a href="#">About</a></li>
                      <li><a href="#">Services</a></li>
                      <li><a href="#">Portfolio</a></li>
                      <li><a href="#">Contact</a></li>
                  </ul>
              </nav>
              <div class="header-text">
                  <p>Web Developer</p>
                  <h1>Hi, I'm <span>Nimra</span> Jahangir</h1>
              </div>
        </div>
      </div>
  )
}

export default Banner