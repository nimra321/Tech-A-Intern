// import React from 'react'

import { getImageUrl } from "../../utils"

export const Hero = () => {
  return (
    <section>
        <div>
            <h1>Hi, I'm Nimra Jahangir</h1>
            <p>I'm a Mern Stack Developer. I develop fully responsive and attractive User interfaces websites.</p>
            <a href="mailto:nimra.jahangir2001@gmail.com">Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="hero image" />
    </section>
  )
}
