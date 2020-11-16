import React from 'react';
import './NexusBuilders.css';
import Scrollspy from 'react-scrollspy';
import ProgressBar from "react-progressbar-on-scroll";

const iframe = '<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="1000" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FecsbLHrbKFXGROP9vrQmO4%2FNexus-Builders%3Fnode-id%3D2%253A17859%26scaling%3Dscale-down" allowfullscreen></iframe>'; 

function Iframe(props) {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
      />
    );
  }

function NexusBuilders() {
    return (
        <React.Fragment>
            <ProgressBar color="#5b64e1" />
            <div className="nexus-header">
                <h1>Nexus Builders</h1>
                <p>Designing a platform that empowers college students to gain real-life experience through side-projects.</p>
                <img src="/img/Nexus-Builders/Nexus-2.png" alt="mobile mockups of the application"></img>
            </div>

            <div className="sticky">
                <Scrollspy
                    className="scrollspy" items={['Overview', 'Research', 'Ideation', 'Solution', 'Discussion']}
                    currentClassName="isCurrent">
                    <li><a href="#Overview">Overview</a></li>
                    <li><a href="#Research">Research</a></li>
                    <li><a href="#Ideation">Ideation &#38; Iteration</a></li>
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
                            <p className="section">Working on side projects is a great way to gain valuable real-world experience in college, however, there aren’t any well-known platforms that facilitate project forming among college students. Instead, students have to manually find students to form teams with.</p>

                            <h3>The Outcome</h3>
                            <p className="section">Nexus Builders is a mobile-friendly web application that <strong>empowers students to gain hands-on experience by facilitating project forming.</strong> It allows students to easily find and join ongoing projects and/or recruit team members for their own project ideas.</p>

                            <h3>My Contribution</h3>
                            <p className="section">As a UX designer, I led the ideation process with the design team, created the initial wireframes, worked on the high-fidelity designs, specifically the filtering system, and collected user feedback from user tests. As a UX researcher, I worked with Rachel and Jaewon to conduct user research (survey and interviews). I also coordinated with Jaewon, Vincent, and Kate to ensure our product was competitive and feasible.</p>
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
                    <h2>RESEARCH</h2>

                    <div className="competitive-analysis section">
                        <h3>Competitive Anaylsis</h3>
                        <p>To better understand the problem space, Kate conducted a competitive analysis of products that facilitate project-forming.</p>
                        <div className="other-domains">
                            <a href="https://nomadprojects.io/" target="_blank" rel="noopener noreferrer"><img alt="Nomad Projects' logo" src="https://nomadprojects.io/bundles/app/img/nomadprojects_logo.png"></img></a>
                            <a href="https://findamaker.io/" target="_blank" rel="noopener noreferrer"><img alt="Find a Maker logo" src="https://findamaker.io/img/full_icon.png"></img></a>
                        </div>
                        <p>Our main finding from the analysis was that existing platforms for finding side-projects have a <strong>broad target user group</strong> and include anyone who wants to work on a side project.</p>
                        <p>This motivated us to focus on college students and their experience with finding side projects.</p>
                    </div>

                    <div className="section">
                        <h3>Surveys &#38; Interviews</h3>
                        <p>We first conducted a survey to broadly understand how college students view and find side projects and what they look for in a team/teammates. We distributed the survey to undergraduates at UW and received 28 responses.</p>
                        <p>We then followed up with 3 respondees and interviewed them to gain a better understanding of their perspective towards side projects.</p>
                    </div>

                    <div className="section">
                        <h3>Key Findings</h3>
                        <ul>
                            <li>Students view side projects as important, with an 8.2 average (out of 10).</li>
                            <li>Students mainly find side projects through networking, posters, social media, and Google.</li>
                            <li>Ideal teammate = someone who is positive, enthusiastic, flexible, communicates well and knows what their skills are.</li>
                            <li>Pain Points</li>
                            <ul>
                                <li>Dealing with members who don't complete their assigned part.</li>
                                <li>Unclear roles/responsibilities or overlap between team members.</li>
                            </ul>
                        </ul>
                    </div>

                    {/* <div className="section">
                        <h3>User Needs</h3>
                    </div> */}
                </section>

                <section id="Ideation">
                    <h2>IDEATION &#38; ITERATION</h2>

                    <div className="section">
                        <h3>Brainstorming</h3>
                        <img alt="3 sitting people staring at a whiteboard of sketches" src="/img/Nexus-Builders/ideation.jpeg"></img>
                        <p>We knew we wanted to create a mobile-friendly web application so we started by brainstorming the features we wanted our application to have. We then had each designer create 10 screens and voted on which aspects we liked best.</p>
                    </div>

                    <div className="section">
                        <h3>Site Map</h3>
                        <p>We then created a site map based on our sketches.</p>
                        <img alt="sitemap of our application" src="/img/Nexus-Builders/sitemap.png"></img>
                    </div>

                    <div className="section">
                        <h3>Wireframes</h3>
                        <p>Based on our site map and previous sketches, I created some wireframes.</p>
                        <img alt="wireframes of our application" src="/img/Nexus-Builders/Wireframe.png"></img>
                    </div>
                </section>

                <section id="Solution">
                    <h2>SOLUTION</h2>
                    <p>After conducting some usability tests, we integrated the feedback into our final prototype.</p>
                    {/* <p>Ideation - whiteboarding, site map, wireframes</p>
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
                    <p>Live Application</p> */}
                    <div className="section">
                        <h3>User Flows</h3>
                        <img alt="Mockups that demonstrate how to create a project" src="/img/Nexus-Builders/userflow-1.png"></img>
                        <img alt="Mockups that demonstrate how to recruit a team member" src="/img/Nexus-Builders/userflow-2.png"></img>
                    </div>
{/* 
                    <div className="section">
                        <h3>Addressing User Needs</h3>
                    </div> */}

                    <div className="section">
                        <h3>Interactive Final Prototype</h3>
                        <Iframe iframe={iframe} />
                    </div>

                    <p>Thanks to our wonderful development team, we were able to build and launch our website. If you are interested, you can <a href="https://www.nexus.builders/" target="_blank" rel="noopener noreferrer">view it here!</a></p>
                </section>

                <section id="Discussion">
                    <h2>DISCUSSION</h2>
                    <div className="section">
                        <h3>Next Steps</h3>
                        <p>After creating our final design and launching our product, a new group of team members was onboarded to continue working on the project. Some futures steps they could take are gathering user feedback and refining the platform so that it is more effective.</p>
                    </div>

                    <div className="section">
                        <h3>Lessons Learned</h3>
                        <p>After interviewing students about the filtering system, I realized the importance of user insights in designing a product. Successful products must be designed with the target users in mind. <strong>Designers shouldn't make decisions based on their personal knowledge or assume things about the users</strong> and how they will interact with the product. Instead, it is important to consistently gather user feedback to guide the design of the product.</p>
                    </div>
                </section>
            </div>
        </React.Fragment >
    )
}

export default NexusBuilders;