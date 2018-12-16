import React, { Component } from "react";
import "./css/resume.css";
export default class Resume extends Component {
  render() {
    return (
      <div id="container">
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
          id="sideNav"
        >
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <span className="d-block d-lg-none">Clarence Taylor</span>
            <span className="d-none d-lg-block">
              <img
                className="img-fluid img-profile rounded-circle mx-auto mb-2"
                src="img/profile.jpg"
                alt=""
              />
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#experience">
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#education">
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#interests">
                  Interests
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#awards">
                  Awards
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container-fluid p-0">
          <section
            className="resume-section p-3 p-lg-5 d-flex d-column"
            id="about"
          >
            <div className="my-auto">
              <h1 className="mb-0">
                Jean Luc
                <span className="text-primary">Abayo</span>
              </h1>
              <div className="subheading mb-5">
                3542 KG Street · Kimironko, · (+250) 785 932 525 ·
                <a href="mailto:name@email.com">abayo@gmail.com</a>
              </div>
              <p className="lead mb-5">
                I am experienced in leveraging agile frameworks to provide a
                robust synopsis for high level overviews. Iterative approaches
                to corporate strategy foster collaborative thinking to further
                the overall value proposition.
              </p>
              <div className="social-icons">
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="#">
                  <i className="fab fa-github" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
              </div>
            </div>
          </section>

          <hr class="m-0" />

          <section
            class="resume-section p-3 p-lg-5 d-flex flex-column"
            id="experience"
          >
            <div class="my-auto">
              <h2 class="mb-5">Experience</h2>

              <div class="resume-item d-flex flex-column flex-md-row mb-5">
                <div class="resume-content mr-auto">
                  <h3 class="mb-0">Senior Web Developer</h3>
                  <div class="subheading mb-3">Andela</div>
                  <p>
                    Bring to the table win-win survival strategies to ensure
                    proactive domination. At the end of the day, going forward,
                    a new normal that has evolved from generation X is on the
                    runway heading towards a streamlined cloud solution. User
                    generated content in real-time will have multiple
                    touchpoints for offshoring.
                  </p>
                </div>
                <div class="resume-date text-md-right">
                  <span class="text-primary">March 2013 - Present</span>
                </div>
              </div>

              <div class="resume-item d-flex flex-column flex-md-row mb-5">
                <div class="resume-content mr-auto">
                  <h3 class="mb-0">Web Developer</h3>
                  <div class="subheading mb-3">Nexpals</div>
                  <p>
                    Capitalize on low hanging fruit to identify a ballpark value
                    added activity to beta test. Override the digital divide
                    with additional clickthroughs from DevOps. Nanotechnology
                    immersion along the information highway will close the loop
                    on focusing solely on the bottom line.
                  </p>
                </div>
                <div class="resume-date text-md-right">
                  <span class="text-primary">December 2011 - March 2013</span>
                </div>
              </div>

              <div class="resume-item d-flex flex-column flex-md-row mb-5">
                <div class="resume-content mr-auto">
                  <h3 class="mb-0">Junior Web Designer</h3>
                  <div class="subheading mb-3">Kepler</div>
                  <p>
                    Podcasting operational change management inside of workflows
                    to establish a framework. Taking seamless key performance
                    indicators offline to maximise the long tail. Keeping your
                    eye on the ball while performing a deep dive on the start-up
                    mentality to derive convergence on cross-platform
                    integration.
                  </p>
                </div>
                <div class="resume-date text-md-right">
                  <span class="text-primary">July 2010 - December 2011</span>
                </div>
              </div>

              <div class="resume-item d-flex flex-column flex-md-row">
                <div class="resume-content mr-auto">
                  <h3 class="mb-0">Web Design Intern</h3>
                  <div class="subheading mb-3">KCB</div>
                  <p>
                    Collaboratively administrate empowered markets via
                    plug-and-play networks. Dynamically procrastinate B2C users
                    after installed base benefits. Dramatically visualize
                    customer directed convergence without revolutionary ROI.
                  </p>
                </div>
                <div class="resume-date text-md-right">
                  <span class="text-primary">September 2008 - June 2010</span>
                </div>
              </div>
            </div>
          </section>

          <hr class="m-0" />

          <section
            class="resume-section p-3 p-lg-5 d-flex flex-column"
            id="education"
          >
            <div class="my-auto">
              <h2 class="mb-5">Education</h2>

              <div class="resume-item d-flex flex-column flex-md-row mb-5">
                <div class="resume-content mr-auto">
                  <h3 class="mb-0">Southern New Hampshire University</h3>
                  <div class="subheading mb-3">
                    Bachelor of Art in Management Concentration in Logistics and
                    Operations
                  </div>
                  <div>Computer Science - Web Development Track</div>
                  <p>GPA: 3.23</p>
                </div>
                <div class="resume-date text-md-right">
                  <span class="text-primary">August 2006 - May 2010</span>
                </div>
              </div>

              <div class="resume-item d-flex flex-column flex-md-row">
                <div class="resume-content mr-auto">
                  <h3 class="mb-0">Lycee de Kigali High School</h3>
                  <div class="subheading mb-3">Technology Magnet Program</div>
                  <p>GPA: 3.56</p>
                </div>
                <div class="resume-date text-md-right">
                  <span class="text-primary">August 2002 - May 2006</span>
                </div>
              </div>
            </div>
          </section>

          <hr class="m-0" />

          <section
            class="resume-section p-3 p-lg-5 d-flex flex-column"
            id="skills"
          >
            <div class="my-auto">
              <h2 class="mb-5">Skills</h2>

              <div class="subheading mb-3">
                Programming Languages &amp; Tools
              </div>
              <ul class="list-inline dev-icons">
                <li class="list-inline-item">
                  <i class="fab fa-html5" />
                </li>
                <li class="list-inline-item">
                  <i class="fab fa-css3-alt" />
                </li>
                <li class="list-inline-item">
                  <i class="fab fa-js-square" />
                </li>
                <li class="list-inline-item">
                  <i class="fab fa-angular" />
                </li>
                <li class="list-inline-item">
                  <i class="fab fa-react" />
                </li>
                <li class="list-inline-item">
                  <i class="fab fa-node-js" />
                </li>
                <li class="list-inline-item">
                  <i class="fab fa-sass" />
                </li>
                <li class="list-inline-item">
                  <i class="fab fa-less" />
                </li>
                <li class="list-inline-item">
                  <i class="fab fa-wordpress" />
                </li>
                <li class="list-inline-item">
                  <i class="fab fa-gulp" />
                </li>
                <li class="list-inline-item">
                  <i class="fab fa-grunt" />
                </li>
                <li class="list-inline-item">
                  <i class="fab fa-npm" />
                </li>
              </ul>

              <div class="subheading mb-3">Workflow</div>
              <ul class="fa-ul mb-0">
                <li>
                  <i class="fa-li fa fa-check" />
                  Mobile-First, Responsive Design
                </li>
                <li>
                  <i class="fa-li fa fa-check" />
                  Cross Browser Testing &amp; Debugging
                </li>
                <li>
                  <i class="fa-li fa fa-check" />
                  Cross Functional Teams
                </li>
                <li>
                  <i class="fa-li fa fa-check" />
                  Agile Development &amp; Scrum
                </li>
              </ul>
            </div>
          </section>

          <hr class="m-0" />

          <section
            class="resume-section p-3 p-lg-5 d-flex flex-column"
            id="interests"
          >
            <div class="my-auto">
              <h2 class="mb-5">Interests</h2>
              <p>
                Apart from being a web developer, I enjoy most of my time being
                outdoors. In the winter, I am an avid skier and novice ice
                climber. During the warmer months here in Colorado, I enjoy
                mountain biking, free climbing, and kayaking.
              </p>
              <p class="mb-0">
                When forced indoors, I follow a number of sci-fi and fantasy
                genre movies and television shows, I am an aspiring chef, and I
                spend a large amount of my free time exploring the latest
                technology advancements in the front-end web development world.
              </p>
            </div>
          </section>

          <hr class="m-0" />

          <section
            class="resume-section p-3 p-lg-5 d-flex flex-column"
            id="awards"
          >
            <div class="my-auto">
              <h2 class="mb-5">Awards &amp; Certifications</h2>
              <ul class="fa-ul mb-0">
                <li>
                  <i class="fa-li fa fa-trophy text-warning" />
                  Google Analytics Certified Developer
                </li>
                <li>
                  <i class="fa-li fa fa-trophy text-warning" />
                  Mobile Web Specialist - Google Certification
                </li>
                <li>
                  <i class="fa-li fa fa-trophy text-warning" />1<sup>st</sup>
                  Place - University of Colorado Boulder - Emerging Tech
                  Competition 2009
                </li>
                <li>
                  <i class="fa-li fa fa-trophy text-warning" />1<sup>st</sup>
                  Place - University of Colorado Boulder - Adobe Creative Jam
                  2008 (UI Design Category)
                </li>
                <li>
                  <i class="fa-li fa fa-trophy text-warning" />2<sup>nd</sup>
                  Place - University of Colorado Boulder - Emerging Tech
                  Competition 2008
                </li>
                <li>
                  <i class="fa-li fa fa-trophy text-warning" />1<sup>st</sup>
                  Place - James Buchanan High School - Hackathon 2006
                </li>
                <li>
                  <i class="fa-li fa fa-trophy text-warning" />3<sup>rd</sup>
                  Place - James Buchanan High School - Hackathon 2005
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
