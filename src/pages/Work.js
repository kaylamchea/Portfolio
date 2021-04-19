import React from 'react';
import './Work.css';
import CaseStudy from "../components/CaseStudy";

// Images
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import email from "../images/email.png";

import nexusBuildersCover from "../images/nexusBuilders/cover.png";
import buddy from "../images/buddy.png";
import CodingProject from '../components/CodingProject';

// Coding Images
import code1 from '../images/code1.png';
import code2 from '../images/code2.png';
import code3 from '../images/code3.png';
import code4 from '../images/code4.png';


import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Work() {
    return (
        <React.Fragment>
            <div className="landing-page">
                <div data-aos="fade-up" data-aos-duration="1500" className="intro">
                    <h1 className="intro-name"><span id="wave" role="img" aria-label="waving hand">👋🏼</span> Hi, my name is Kayla.</h1>
                    <p className="intro-desc">I'm a <span className="ux-font">UX/UI Designer</span> and a <span className="code-font">Front End Developer</span> based in Seattle, WA. I'm passionate about addressing human problems with usable, enjoyable, and equitable products.</p>
                    <p className="intro-desc">
                        Currently studying Informatics at the University of WA. Actively seeking internship UX and front end opportunities for summer 2021.
                    </p>
                    <div id="socials">
                        <a href="https://www.linkedin.com/in/kaylamchea/" target="_blank" rel="noopener noreferrer"><img src={linkedin} /></a>
                        <a href="https://github.com/kaylamchea" target="_blank" rel="noopener noreferrer"><img src={github} /></a>
                        {/* <a href="https://www.behance.net/kaylachea" target="_blank" rel="noopener noreferrer"><img src={behance}></img></a> */}
                        <a href="mailto: kaylamchea@hotmail.com"><img src={email}></img></a>
                        {/* <a className="highlight" href="mailto: kaylamchea@hotmail.com">Email<span role="img" aria-label="up-right arrow">↗</span></a>
                        <a className="highlight" href="https://www.linkedin.com/in/kaylamchea/" target="_blank" rel="noopener noreferrer">LinkedIn<span role="img" aria-label="up-right arrow">↗</span></a>
                        <a className="highlight" href="https://github.com/kaylamchea" target="_blank" rel="noopener noreferrer">Github<span role="img" aria-label="up-right arrow">↗</span></a> */}
                    </div>
                </div>
            </div>

            <div id="case-studies" className="mb-5" data-aos="fade-up" data-aos-duration="1500">
                <h1 className="work-title">view case studies ↓</h1>
                <CaseStudy></CaseStudy>
            </div>

            <div id="code" className="pt-5" data-aos="fade-up" data-aos-duration="1500">
                <h1 className="work-title">view coding projects ↓</h1>
                <div className="container px-0">
                    <div className="row mb-2">
                        <div className="col-sm ps-0 me-1">
                            <CodingProject image={code1} alt="Recycling website" title="Gogo Recycling" desc="A sustainability platform that educates users about recycling through a guide and community board." tags={["React", "Firebase", "King County Dataset"]} github="https://github.com/uw-info442c-au20/gogo-recycling" website="https://gogo-recycling.web.app/"></CodingProject>
                        </div>
                        <div className="col-sm pe-0 ms-1">
                            <CodingProject image={code2} alt="Restaurant picker website" title="Restaurant Picker" desc="A web application that chooses where to eat for you based on your preferences." tags={["React", "Firebase", "Yelp API"]} github="https://github.com/kaylamchea/project-kaylamchea" website="https://kaylamchea.github.io/project-kaylamchea/"></CodingProject>
                        </div>
                    </div>
                    <div className="row pt-4">
                        <div className="col-sm ps-0 me-1">
                            <CodingProject image={code3} alt="Onboarding page of well-being website" title="buddy" desc="A well-being platform that helps users build healthy habits through gamification. Currently a work-in-progress." tags={["React", "Firebase"]} github="https://github.com/ashshah1/buddy" website="https://buddy-7d855.web.app/landing"></CodingProject>
                        </div>
                        <div className="col-sm pe-0 ms-1">
                            <CodingProject image={code4} alt="My portfolio website" title="My Portfolio" desc="A website displaying a curated collection of my past design and coding work." tags={["React", "Firebase"]} github="https://github.com/kaylamchea/Portfolio" website="https://kaylachea.com/"></CodingProject>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Work;