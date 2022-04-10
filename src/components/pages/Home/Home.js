import React, { Component } from 'react'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Profile from '../profile/Profile'
import Contact from '../contact/Contact'
import About from '../about/About'
import Education from '../education/Education'
import Skills from '../skills/Skills'
import Experience from '../experience/Experience'
import Portfolio from '../portfolio/Portfolio'
import ImgProfile from '../../images/main.jpg'

export default class extends Component {
  render() {
    return (
      <section>
        <div className="Container">
          <div className="left-side">
            <div className="profileText">
              <div className="imgBx">
                <img src={ImgProfile} />
              </div>
              <h2>
                Muhammad Shaheer Sarfraz
                <br />
                <span>Web Developer</span>
              </h2>
            </div>

            <div className="contactInfo">
              <h3 className="title">Contact Info</h3>
              <ul>
                <li>
                  <span className="icon"></span>
                  <span className="text">+92 301 8811345</span>
                </li>
                <li>
                  <span className="icon"></span>
                  <span className="text">heysherri01@gmail.com</span>
                </li>
                <li>
                  <span className="icon"></span>
                  <span className="text">
                    www.linkedin.com/in/shaheersarfraz
                  </span>
                </li>
              </ul>
            </div>

            <div className="contactInfo education">
              <h3 className="title">Education</h3>
              <ul>
                <li>
                  <h5>2017-2018</h5>
                  <h4>F.Sc</h4>
                  <h4>Military College Murree</h4>
                </li>
                <li>
                  <h5>2017-2018</h5>
                  <h4>Bachelor in Computer Science</h4>
                  <h4>National university of computer and emerging sciences</h4>
                </li>
              </ul>
            </div>

            <div className="contactInfo education">
              <h3 className="title">Languages</h3>
              <ul>
                <li>
                  <h4>English</h4>
                </li>
                <li>
                  <h4>Urdu</h4>
                </li>
              </ul>
            </div>
          </div>

          <div className="right-side">
            <div className="about">
              <h2 className="title2">Profile</h2>
              <p>
                An undergraduate student of computer science who is always
                thriving to learn about new technologies and diving his way to
                make his skills better everyday{' '}
              </p>
            </div>

            <div className="about">
              <h2 className="title2">Experience</h2>
              <div className="box">
                <div className="year_company">
                  <h5>2021 - Present</h5>
                  <h5>Association for Computing Machinery</h5>
                </div>
                <div className="text">
                  <h4>General Sectory</h4>
                  <p>
                    Working as a team lead and in executive body of world
                    largest and oldesst international scientific and industrial
                    computer society.{' '}
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="year_company">
                  <h5>2019 - 2021</h5>
                  <h5>Fiverr</h5>
                </div>
                <div className="text">
                  <h4>Free lancing</h4>
                  <p>
                    Worked as a free-lancer at fiverr in Web designing and video
                    animation.
                  </p>
                </div>
              </div>
            </div>

            <div className="skills">
              <h2 className="title2">Professional Skills</h2>
              <div className="boxs">
                <h4>React</h4>
                <div className="percent">
                  <div className="inner-class-React"></div>
                </div>
              </div>
              <div className="boxs">
                <h4>Latex</h4>
                <div className="percent">
                  <div className="inner-class-Reacts"></div>
                </div>
              </div>

              <div className="boxs">
                <h4>Adobe XD</h4>
                <div className="percent">
                  <div className="inner-class-XD"></div>
                </div>
              </div>
              <div className="boxs">
                <h4>Adobe After Effects</h4>
                <div className="percent">
                  <div className="inner-class-Effects"></div>
                </div>
              </div>
              <div className="boxs">
                <h4>Photoshop</h4>
                <div className="percent">
                  <div className="inner-class-photoshop"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
