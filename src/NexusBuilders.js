import React from 'react';
import './NexusBuilders.css';
import Scrollspy from 'react-scrollspy';
import ProgressBar from "react-progressbar-on-scroll";


function NexusBuilders() {
    return (
        <React.Fragment>
            <ProgressBar color="#5b64e1" />
            <div>
                <h1>Nexus Builders</h1>
                <p>Designing a platform that empowers college students to gain real-life experience through side-projects.</p>
                <img src="/img/Nexus-2.png"></img>
            </div>

            <div className="sticky">
                <Scrollspy
                    className="scrollspy" items={['Overview', 'Research', 'Design', 'Discussion']}
                    currentClassName="isCurrent">
                    <li><a href="#Overview">OVERVIEW</a></li>
                    <li><a href="#Research">Research</a></li>
                    <li><a href="#Design">Design</a></li>
                    <li><a href="#Discussion">Discussion</a></li>
                </Scrollspy>
            </div>

            <div>
                <section id="Overview">
                    <h2>OVERVIEW</h2>
                    <div className="overview">
                        <div className="overview-1">
                            <h3>The Challenge</h3>
                            <p className="section">Experience is valuable to have these days, especially in tech, however, there aren’t many platforms that easily allow students to work with fellow students to apply the skills they learn in class to the real world.College students are taught in lecture about skills but only have school projects. Based on our research, college students were interested in side projects and found them viable but had a hard time forming teams. Students want to gain hands-on experience and find it valuable but aren’t easily able to especially find good quality team members with similar interests.</p>
                            
                            <h3>Our Outcome</h3>
                            <p className="section">Nexus Builders is a mobile-friendly web application that addresses that empowers students to find ongoing projects to join and/or form a team for their own project ideas.</p>

                            <h3>My Contribution</h3>
                            <p className="section">As a UX designer I led the ideation process with the design team, created the initial wireframes, worked on the high-fidelity designs, specifically the filtering system, with the design team, and collected user feedback from user tests. As a UX researcher, I worked with Rachel and Jaewon to conduct user research (survey and interviews). I also coordinated with Jaewon, Vincent, and Kate to ensure our product was competitive and niche and feasible.</p>
                        </div>
                        <div className="overview-2">
                            <h3>Project Type</h3>
                            <p>Side Project</p>
                            
                            <h3>Project Date</h3>
                            <p>9 months (Oct 2019 - June 2020)</p>
                            
                            <h3>My Role</h3>
                            <p>UX Designer, UX Researcher</p>
                            
                            <h3>Team Members</h3>
                            <p className="teams">Engineering</p>
                            <p>Vincent Widjaya, Sunny Lee</p>
                            <p className="teams">Design</p>
                            <p>Kayla Chea, Rachel Rodney, Susanna Liu, Jelly Park</p>
                            <p className="teams">Project Manager</p>
                            <p>Jaewon Choi</p> 
                            <p className="teams">Business</p>
                            <p>Kate Kim</p>
                        </div>

                    </div>


                </section>
                <section id="Research">
                    <h2>Research</h2>
                    <p>Competitive Anaylsis</p>
                    <p>Surveys</p>
                    <p>Interviews</p>
                    <p>Key Takeaways - user needs?</p>
                </section>
                <section id="Design">
                    <h2>Design</h2>
                    <p>Ideation - whiteboarding, site map, wireframes</p>
                    <p>First Prototype</p>
                    <p>Usability Tests</p>
                    <p>Final Prototype - key features - link to Figma or embedded. Explain how it addresses your key features address the needs.
                    List the user problem and then show screen that addresses it???
                    Visual Design:
                    - We chose blah blah...

                    Key Functionality (Overview of App)
                    Onboarding
                    Home screen
                    Browse projects
                    Browse people
                    Post own project

                    - Features that support user needs
                    User Need 1: -> Filtering system
                    User Need 2: -> Prompt system

                    If you would like to play around with the full Interactive Prototype and look at the rest of our screens go here.

                    Or visit the live deployed website created by our developers based on our final designs!!!

                    </p>
                    <p>Live Application</p>
                </section>
                <section id="Discussion">
                    <h2>Discussion</h2>
                    <p>Next Steps</p>
                    <p>Lessons Learned</p>
                </section>
            </div>
        </React.Fragment>
    )
}

export default NexusBuilders;