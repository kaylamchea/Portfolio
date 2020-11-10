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
                    <li><a href="#Overview">Overview</a></li>
                    <li><a href="#Research">Research</a></li>
                    <li><a href="#Design">Design</a></li>
                    <li><a href="#Discussion">Discussion</a></li>
                </Scrollspy>
            </div>

            <div>
                <section id="Overview">
                    <h2>Overview</h2>
                    <p>Project Type: Student Project</p>
                    <p>Project Date: 9 months (Oct 2019 - June 2020)</p>
                    <p>My Role: UX Designer, UX Researcher</p>
                    <p>Team Members: Engineering - Vincent Widjaya, Sunny Lee; Design - Kayla Chea, Rachel Rodney, Susanna Liu and Jelly Park; Project Manager - Jaewon Choi; Business Team - Kate Kim</p>
                    <p> The Challenge: Experience is valuable to have these days, especially in tech, however, there aren’t many platforms that easily allow students to work with fellow students to apply the skills they learn in class to the real world.College students are taught in lecture about skills but only have school projects. Based on our research, college students were interested in side projects and found them viable but had a hard time forming teams. Students want to gain hands-on experience and find it valuable but aren’t easily able to especially find good quality team members with similar interests.</p>
                    <p>Our Outcome: Nexus Builders is a mobile-friendly web application that addresses that empowers students to find ongoing projects to join and/or form a team for their own project ideas.</p>
                    <p>My Contribution: As a UX designer I led the ideation process with the design team, created the initial wireframes, worked on the high-fidelity designs, specifically the filtering system, with the design team, and collected user feedback from user tests. As a UX researcher, I worked with Rachel and Jaewon to conduct user research (survey and interviews). I also coordinated with Jaewon, Vincent, and Kate to ensure our product was competitive and niche and feasible.</p>
                    
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