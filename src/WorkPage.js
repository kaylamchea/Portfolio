import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import ScrollIntoView from 'react-scroll-into-view';

import CaseStudy from "./CaseStudy";
import './WorkPage.css';

function WorkPage() {
    return (
        <React.Fragment>
            <div className="landing-page">
                <div className="intro">
                    <div className="intro-text">
                        <p className="intro-name">
                            Hi, my name is Kayla~ <span role="img" aria-label="waving hand">👋</span>
                        </p>
                        <div className="intro-desc">
                            <div> I am a UX designer &amp; developer passionate about addressing ongoing problems through humane design. 
                                {/* <Typewriter options={{ strings: ['humane design', 'social change', 'mental health', 'problem-solving'], autoStart: true, loop: true, }} />*/}
                            </div>
                        </div>
                    </div>
                </div>
                <ScrollIntoView selector="#case-studies"><input type="image" className="down-arrow" src="https://www.flaticon.com/svg/static/icons/svg/130/130907.svg" alt="Down arrow"/></ScrollIntoView>
            </div>
            <div id="case-studies">
                <CaseStudy name="Nexus Builders" category="UX Design/Research" time="Winter 2019" desc="Empowering students to gain hands-on experience with a project search platform." linkText="Read more" img="/img/Nexus-1.png" arrow="→" url={process.env.PUBLIC_URL + '/work/nexus-builders'}></CaseStudy>
                <CaseStudy name="Foodie Fanatic" category="Information Architecture, UX Design" time="Winter 2019" desc="Redesigning a food website to meet user needs and business goals." linkText="**Under Construction" img="/img/Foodie-1.png" disabled="disabled"></CaseStudy>
                <CaseStudy name="Labyrinth" category="UX Research" time="Winter 2019" desc="Envisioning a restorative space for stressed students on campus." linkText="**Under Construction" img="/img/Labyrinth-1.png" disabled="disabled"></CaseStudy>

            </div>

        </React.Fragment>
    );
}

export default WorkPage;