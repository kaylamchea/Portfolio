import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';

import './Work.css';

import CaseStudy from "./CaseStudy";

function Work() {
    return (
        <React.Fragment>
            <div className="landing-page">
                <div className="intro">
                    <h1 className="intro-name">Hi, my name is Kayla. <span role="img" aria-label="waving hand">👋</span></h1>
                    <p className="intro-desc">I'm a multidisciplinary designer with a focus on <span className="highlight">UX design</span>. I'm passionate about addressing ongoing problems through humane design.</p>
                    <div id="written-socials">
                        <a className="highlight" href="mailto: kaylamchea@hotmail.com">Email<span role="img" aria-label="up-right arrow">↗</span></a>
                        <a className="highlight" href="https://www.linkedin.com/in/kaylamchea/" target="_blank" rel="noopener noreferrer">LinkedIn<span role="img" aria-label="up-right arrow">↗</span></a>
                        <a className="highlight" href="https://github.com/kaylamchea" target="_blank" rel="noopener noreferrer">Github<span role="img" aria-label="up-right arrow">↗</span></a>
                    </div>
                </div>
                <ScrollIntoView selector="#case-studies"><input type="image" className="down-arrow" src="https://www.flaticon.com/svg/static/icons/svg/130/130907.svg" alt="Down arrow" /></ScrollIntoView>
            </div>
            
            <div id="case-studies">
                <h1 id="case-title">Selected <span className="highlight">Case Studies.</span></h1>
                <CaseStudy name="Nexus Builders" category="UX Design/Research, Mobile Design" time="Winter 2019" desc="Empowering students to gain hands-on experience with a project search platform." img="/img/Nexus-Builders/Nexus-1.png" url={process.env.PUBLIC_URL + '/work/nexus-builders'}></CaseStudy>
                <CaseStudy name="Foodie Fanatic" category="IA, UX Design, Mobile/Web Design" time="Winter 2019" desc="Redesigning a food website to meet user needs and business goals." img="/img/Foodie-Fanatic/preview.png" url={process.env.PUBLIC_URL + '/work/foodie-fanatic'}></CaseStudy>
                <CaseStudy name="LocateUW" category="UX Design/Research, Mobile Design" time="Fall 2018" desc="Designing a Campus Navigation App for UW." img="/img/Locate-UW/preview.png" url={process.env.PUBLIC_URL + '/work/locate-uw'}></CaseStudy>
            </div>
        </React.Fragment>
    );
}

export default Work;