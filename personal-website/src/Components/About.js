import React from 'react'
import AboutImg from '../images/img.png'

const About = () => {
  return (
    <div className="about">
        <div class="container">
            <div class="row">
                <div class="about-col-1">
                    <img src={AboutImg} alt="img" />
                </div>
                <div class="about-col-2">
                    <h1 class="sub-title">About Me</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iusto corporis quibusdam ea, aperiam dolores consectetur nisi esse nobis? Eligendi odio officia ut fuga iure provident nihil ad reprehenderit reiciendis? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique id rem soluta, eligendi impedit voluptatibus cumque accusamus dolorum quae molestiae illum quos vitae tempore, dolor cupiditate ullam laborum quam? Ut?</p>

                    <div className='tab-titles'>
                        <p className='tab-links active-link' onClick="opentab('skills')">Skills</p>
                        <p className='tab-links' onClick="opentab('experience')">Experience</p>
                        <p className='tab-links' onClick="opentab('education')">Education</p>
                    </div>
                    <div className='tab-content active-tab' id='skills'>
                        <ul>
                            <li><span>UI?UX</span><br />Designing Web/App interfaces</li>
                            <li><span>Front-end Development</span><br />Client Side Development</li>
                            <li><span>Back-end Development</span><br />Sever Side Development</li>
                        </ul>
                    </div>
                    <div className='tab-content' id='experience'>
                        <ul>
                            <li><span>UI?UX</span><br />Designing Web/App interfaces</li>
                            <li><span>Front-end Development</span><br />Client Side Development</li>
                            <li><span>Back-end Development</span><br />Sever Side Development</li>
                        </ul>
                    </div><div className='tab-content' id='education'>
                        <ul>
                            <li><span>UI?UX</span><br />Designing Web/App interfaces</li>
                            <li><span>Front-end Development</span><br />Client Side Development</li>
                            <li><span>Back-end Development</span><br />Sever Side Development</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About