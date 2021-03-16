import React from 'react';
import './About.css';

import profilePicture from '../images/profilePicture2.jpg';
import profilePicture2 from '../images/profilePicture3.jpg';

function About() {
    return (
        <React.Fragment>
            <div className="about">
                <div data-aos="fade-up" data-aos-duration="1500" className="about-sticky">
                    <a>
                        <img alt="" src={profilePicture}></img>
                        <img alt="" src={profilePicture2}></img>
                    </a>
                    <p>↑ hover for a surprise</p>
                </div>
                <div className="about-text">
                    <div data-aos="fade-up" data-aos-duration="1500" className="about-container">
                        <h1>about me —</h1>
                        <p>Choum reap sour! I'm <strong>Kayla</strong>, a Cambodian-American <strong>UX designer with T-shaped skills</strong>. I am currently studying Informatics at UW Seattle <span role="img" aria-label="tree">🌲</span>.</p>
                        <p>My road to design has been a bumpy but rewarding ride. From a young age, I have been passionate about <strong>helping others.</strong> This interest, combined with parental influence, led me down the path of medicine. Although I wasn't interested in the natural sciences, I knew I wanted a job that helped others and settled for a career as a doctor 🩺.</p>
                        <p>The direction of my life changed, however, when I discovered the field of design in university. I soon realized the importance of design in our everyday lives and its powerful impact on the human experience. I instantly fell in love with the design process, from user research to development 💡.</p>
                        <p>I am passionate about designing for social impact and aspire to create humane and inclusive products that make the world a better place, or more realistically, do more good than harm to the world 🌎.</p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500" className="about-container">
                        <h1>what i've been up to —</h1>
                        <p>Playing indie games, binging anime, listening to music, daydreaming...</p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500" className="about-container student-org">
                        <h1>student orgs — </h1>
                        <p>Creative Director of <a href="https://winfo.ischool.uw.edu/" target="_blank" rel="noopener noreferrer" className="highlight">Women in Informatics ↗</a></p>
                        <p>Co-President of <a href="https://www.facebook.com/SudoUW" target="_blank" rel="noopener noreferrer" className="highlight">Student User Developer Organization ↗</a></p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500" className="about-container">
                        <h1>awards —</h1>
                        <p>Placed 1st (Team of 3) for the 'Classic Track' at <a href="https://www.protothon.info/" target="_blank" rel="noopener noreferrer" className="highlight">DubsTech Protothon 2021 </a>(400~ participants). View our <a href="https://docs.google.com/presentation/d/1Q5wHFajuQcoyHE-8qh8C9VZGo1AXRXB_E2bj7os-17Q/edit?ts=602885e8#slide=id.p" target="_blank" rel="noopener noreferrer" className="highlight">slide deck.</a></p>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1500"  className="skills">
                <h1>skills —</h1>
                <div className="skills-container">
                    <div>
                        <h1>design 🎨</h1>
                        <p>UI/UX design</p>
                        <p>Prototyping</p>
                        <p>Wireframing</p>
                        <p>Usability testing</p>
                        <p>User research</p>
                        <p>Visual design</p>
                        <p>Accessibility</p>
                        <p>IA methods</p>
                    </div>
                    <div>
                    <h1>tools 🖥</h1>
                        <p>Adobe CC</p>
                        <p>Figma</p>
                        <p>Procreate</p>
                        <p>Tableau</p>
                    </div>
                    <div>
                    <h1>technical 👾</h1>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                        <p>React</p>
                        <p>Firebase</p>
                        <p>R</p>
                        <p>SQL</p>
                    </div>
                    <div>
                    <h1>personal 💼</h1>
                        <p>Communication</p>
                        <p>Creativity</p>
                        <p>Leadership</p>
                        <p>Problem solving</p>
                        <p>Time management</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default About;