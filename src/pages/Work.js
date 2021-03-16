import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';

import './Work.css';
import CaseStudy from "../components/CaseStudy";

import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import behance from "../images/behance-logo.png";
import email from "../images/email.png";

import nexusBuildersCover from "../images/nexusBuilders/cover.png";

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Work() {
    return (
        <React.Fragment>
            <div className="landing-page">
                <div data-aos="fade-up" data-aos-duration="1500" className="intro">
                    <h1 className="intro-name"><span id="wave" role="img" aria-label="waving hand">👋🏼</span> Hi, my name is Kayla.</h1>
                    <p className="intro-desc">I'm a <strong>multidisciplinary designer with a focus on UX design</strong> based in Seattle, WA. I'm passionate about addressing ongoing problems through humane design.</p>
                    <p className="intro-desc">
                        Currently studying Informatics at the University of WA. Actively seeking UX internship opportunities for summer 2021.
                    </p>
                    <div id="socials">
                        <a href="https://www.linkedin.com/in/kaylamchea/" target="_blank" rel="noopener noreferrer"><img src={linkedin} /></a>
                        <a href="https://github.com/kaylamchea" target="_blank" rel="noopener noreferrer"><img src={github} /></a>
                        <a href="https://www.behance.net/kaylachea" target="_blank" rel="noopener noreferrer"><img src={behance}></img></a>
                        <a href="mailto: kaylamchea@hotmail.com"><img src={email}></img></a>
                        {/* <a className="highlight" href="mailto: kaylamchea@hotmail.com">Email<span role="img" aria-label="up-right arrow">↗</span></a>
                        <a className="highlight" href="https://www.linkedin.com/in/kaylamchea/" target="_blank" rel="noopener noreferrer">LinkedIn<span role="img" aria-label="up-right arrow">↗</span></a>
                        <a className="highlight" href="https://github.com/kaylamchea" target="_blank" rel="noopener noreferrer">Github<span role="img" aria-label="up-right arrow">↗</span></a> */}
                    </div>
                    <ScrollIntoView selector="#case-studies"><p className="view-studies">view my case studies below ↓</p></ScrollIntoView>
                </div>
                {/* <ScrollIntoView selector="#case-studies"><input type="image" className="down-arrow" src="https://www.flaticon.com/svg/static/icons/svg/130/130907.svg" alt="Down arrow" /></ScrollIntoView> */}
            </div>

            <div id="case-studies">
                {/* <h1 id="case-title">Case Studies</h1> */}
                <div data-aos="fade-up" data-aos-duration="1500">
                    <CaseStudy name="Nexus Builders" category="UX Design/Research" time="Winter 2019" desc="Empowering students to gain hands-on experience with a project search platform." img={nexusBuildersCover} url={process.env.PUBLIC_URL + '/work/nexus-builders'}></CaseStudy>
                    <CaseStudy name="Nexus Builders" category="UX Design/Research" time="Winter 2019" desc="Empowering students to gain hands-on experience with a project search platform." img={nexusBuildersCover} url={process.env.PUBLIC_URL + '/work/nexus-builders'}></CaseStudy>
                </div>
                {/* <CaseStudy name="Foodie Fanatic" category="Information Architecture, UX Design" time="Winter 2019" desc="Redesigning a food website to meet user needs and business goals." img="/img/Foodie-1.png"></CaseStudy>
                <CaseStudy name="Labyrinth" category="UX Research" time="Winter 2019" desc="Envisioning a restorative space for stressed students on campus." img="/img/Labyrinth-1.png"></CaseStudy> */}
            </div>
        </React.Fragment>
    );
}

export default Work;