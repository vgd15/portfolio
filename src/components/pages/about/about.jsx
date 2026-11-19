import React from "react";
import profileImage from '../../../img/profile.jpeg';
import './about.css';

function About(){
    return(
            <section className="home">
                <div className="about-home d-flex col-xl-12 justify-content-center align-items-center gap-4">
                    <div className="box-img d-flex flex-column justify-content-center align-items-center col-md-4 col-xs-12 ">
                        <div className="suporte-img">
                        <img src={profileImage} alt="My perfil" className="img-perfil" />
                        </div>
                         
                        <strong>Deise <br/> Duarte</strong>

                         <svg width="60" height="6" viewBox="0 0 110 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <line y1="3" x2="110" y2="3" stroke="#007157" stroke-width="6"/>
                         </svg>

                         <span className="occupation">Full-Stack Developer</span>

                         <div className="footer-box col-12 ">
                            <ul className="d-flex flex-row gap-3 justify-content-center align-items-center">
                                <li><a href="https://github.com/vgd15"><i className="fa-brands fa-github"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/deise-duarte-a81917184/"><i className="fa-brands fa-linkedin-in"></i></a></li>
                            </ul>
                         </div>
                    </div>

                    <div className="box-text col-md-4 col-12">
                        <h2 className="salutation"><strong>Hello, welcome</strong></h2>
                        <span>My profile and my projects </span>
                        <div className="button-list">
                            <ul className="d-flex flex-row gap-2 gap-md-3 justify-content-center align-items-center flex-wrap">
                                <li><a href="/curriculum" className="btn btn-primary curriculo">RESUME</a></li>
                                <li><a href="/projects" className="btn btn-primary projetos">PROJECTS</a></li>
                                <li><a href="/courses" className="btn btn-primary projetos">COURSES</a></li>
                            </ul>
                        </div>
                        <p className="">
                        Graduated in Information Technology and passionate about programming.

                        I consider myself a focused and determined person, and one of my greatest strengths is my emotional self-control.

                        From 2015 to 2017, I worked at Ramsons as an apprentice in Manaus.

                        At the end of 2017, I moved to the state of São Paulo, where I worked as a self-employed professional until 2022. 

                        From March to August 2023, I worked with ChatBot maintenance, analysis, and development.

                        From 2023 to the present, I have been working as a Front-End Developer.
                        </p>
                    </div>
                    
                </div>
                
            
        </section>

    );
}

export default About;