import React from 'react';
import './App.css';
import Scrollspy from 'react-scrollspy';
import ProgressBar from "react-progressbar-on-scroll";

import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const iframe = '<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="1000" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FPLEHBYO7aJvRDBx6zZ9gTi%2FLocateUW-Copy%3Fnode-id%3D216%253A4%26scaling%3Dscale-down" allowfullscreen></iframe>';

function Iframe(props) {
    return (
        <div
            dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
        />
    );
}

function LocateUW() {
    return (
        <React.Fragment>
            <ProgressBar color="#5b64e1" />
            <div className="nexus-header">
                <h1>LocateUW</h1>
                <p>Designing a UW campus navigation app to improve a vistor's ability to find what they need.</p>
                <img className="responsive-image" src="/img/Locate-UW/preview.png" alt="mobile mockups of the application"></img>
            </div>

            <div className="sticky">
                <Scrollspy
                    className="scrollspy" items={['Overview', 'Problem', 'Ideation', 'Solution', 'Discussion']}
                    currentClassName="isCurrent">
                    <li><a href="#Overview">Overview</a></li>
                    <li><a href="#Problem">Problem Definition</a></li>
                    <li><a href="#Ideation">Ideation</a></li>
                    <li><a href="#Solution">Solution</a></li>
                    <li><a href="#Discussion">Discussion</a></li>
                </Scrollspy>
            </div>

            <div>
                <section id="Overview">
                    <h2>OVERVIEW</h2>
                    <div className="overview">
                        <div className="overview-1">
                            <h3>The Challenge</h3>
                            <p className="section">The objective of our assignment was to "envision" a new information system that meets an information need in the world. Rather than actually building our idea, our goal was to describe our design concept with enough detail so that someone could create it in the future.</p>

                            <h3>The Outcome</h3>
                            <p className="section">In the end, we wrote up a report describing our system in detail (functionality, architecture, role of automation, harms and benefits, etc.) and created a low fidelity prototype.</p>

                            <h3>My Contribution</h3>
                            <p className="section">As the lead UX designer, I collected user research via surveys and created the initial sketches and the final prototype.</p>
                        </div>

                        <div className="overview-2">
                            <h3>Context</h3>
                            <p className="lower-opacity">INFO200 - Intellectual Foundations of Informatics</p>

                            <h3>Time Frame</h3>
                            <p className="lower-opacity">Nov 2018 - Dec 2018</p>

                            <h3>My Role</h3>
                            <p className="lower-opacity">UX Designer, UX Researcher</p>

                            <h3>Tools</h3>
                            <p className="lower-opacity">Figma</p>

                            <h3>Team Members</h3>
                            <p className="lower-opacity">Kayla Chea, Cheryl Wu</p>
                        </div>
                    </div>
                </section>

                <section id="Problem">
                    <h2>PROBLEM DEFINITION</h2>
                    
                    <div className="section">
                        <p>My teammate and I started off by identifying the information need we wanted to address. One problem we noticed was the lack of information regarding the location of toilets, lockers, and microwaves on campus at the University of Washington (Seattle).​</p>
                    </div>
                    
                    <div className="section">
                        <h3>Surveys</h3>
                        <p>To confirm our information problem was prevalent enough to address we created a short, multiple-choice survey on Google Forms. Our survey asked whether students related always, sometimes, or never to four statements, in the form of “I find myself in need of a ____ but can’t find one.” The blank was filled in respectively by a bathroom, a microwave, a locker, and menstrual products. ​We then asked fellow UW students to fill it out and received 24 responses total.</p>
                        <p>Key Findings</p>
                        <ul>
                            <li>For bathrooms, 8.3% answered always and 66.7% answered sometimes.</li>
                            <li>For lockers, 29.2% answered always and 20.8% answered sometimes.</li>
                            <li>For microwaves, 8.3% answered always and 33.3% answered sometimes.</li>
                        </ul>
                        <p>After receiving these results, we decided to go forward with this issue.</p>
                    </div>
                </section>

                <section id="Ideation">
                    <h2>IDEATION</h2>

                    <div className="section">
                        <h3>Brainstorming</h3>
                        <p>After confirming our problem, we brainstormed multiple solutions, such as e-mailing posters to new students,  having physical posters around campus, or creating a map on the UW website. In the end, we decided a mobile app would be best as users will likely be walking around. Before prototyping, we came up with key features the app should have.</p>
                        <p>Key Features:</p>
                        <ul>
                            <li>A filter button that allows users to choose which specific services they see.</li>
                            <li>A search bar that allows users to find services in a specific building or area.</li>
                            <li>A navigation button that with approval, tracks the user's location.</li>
                            <li>Description pages for each service that contains relevant pictures, important details, and a direction button‍.</li>
                        </ul>
                    </div>
                </section>

                <section id="Solution">
                    <h2>SOLUTION</h2>

                    <div className="section">
                        <h3>Interactive Final Prototype</h3>
                        <p>I was in charge of creating the visual design and I started off by sketching some screens on paper. After consulting with my partner I created a low fidelity prototype of the screens on Figma.</p>
                        <Iframe iframe={iframe} />
                    </div>
                </section>

                <section id="Discussion">
                    <h2>DISCUSSION</h2>
     
                    <div className="section">
                        <h3>Lessons Learned</h3>
                        <p>This project has taught me that documenting your work as you go will help you in the end. I will make sure to track my process better for my next project. I also learned that design is all about the users and conducting surveys provides valuable insight.</p>
                    </div>

                    <div className="section">
                        <h3>Next Steps</h3>
                        <p>If I were to continue this project, I would add a filter option for handicap-accessible bathrooms. I would also create a high-fidelity prototype and have users test it. I would then revise the product until it was effective enough to be launched.</p>
                    </div>
                </section>
            </div>
        </React.Fragment >
    )
}

export default LocateUW;