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
                <CaseStudy name="Nexus Builders" category="UI/UX DESIGN" time="9-MONTHS" desc="Designing a platform that empowers college students to gain real-life experience through side-projects." linkText="Read more" img="/img/ex.png" url="/work/nexus-builders"></CaseStudy>
                <CaseStudy name="Nexus Builders" category="UI/UX DESIGN" time="9-MONTHS" desc="Designing a platform that empowers college students to gain real-life experience through side-projects." linkText="Read more" img="/img/ex.png" url="/work/nexus-builders"></CaseStudy>
                <CaseStudy name="Nexus Builders" category="UI/UX DESIGN" time="9-MONTHS" desc="Designing a platform that empowers college students to gain real-life experience through side-projects." linkText="Read more" img="/img/ex.png" url="/work/nexus-builders"></CaseStudy>
                <CaseStudy name="Nexus Builders" category="UI/UX DESIGN" time="9-MONTHS" desc="Designing a platform that empowers college students to gain real-life experience through side-projects." linkText="Read more" img="/img/ex.png" url="/work/nexus-builders"></CaseStudy>
            </div>

        </React.Fragment>
    );
}

export default WorkPage;