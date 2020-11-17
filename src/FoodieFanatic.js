import React from 'react';
import './App.css';
import './FoodieFanatic.css';
import Scrollspy from 'react-scrollspy';
import ProgressBar from "react-progressbar-on-scroll";

import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

function FoodieFanatic() {
    return (
        <React.Fragment>
            <SimpleReactLightbox>
            <ProgressBar color="#5b64e1" />
            <div>
                <h1>Foodie Fanatic</h1>
                <p>Composing an IA Proposal for a Food Website</p>
                <img className="responsive-image" src="/img/Foodie-Fanatic/preview.png" alt="mobile mockups of the application"></img>
            </div>

            <div className="sticky">
                <Scrollspy
                    className="scrollspy" items={['Overview', 'Business', 'Users', 'Site-map', 'Wireframes']}
                    currentClassName="isCurrent">
                    <li><a href="#Overview">Overview</a></li>
                    <li><a href="#Business">Business Case</a></li>
                    <li><a href="#Users">User Personas</a></li>
                    <li><a href="#Site-map">Site Map</a></li>
                    <li><a href="#Wireframes">Wireframes</a></li>
                    <li><a href="#Discussion">Discussion</a></li>
                </Scrollspy>
            </div>

            <div>
                <section id="Overview">
                    <h2>OVERVIEW</h2>
                    <div className="overview">
                        <div className="overview-1">
                            <div className="section">
                                <h3>The Challenge</h3>
                                <p>Foodie Fanatic, a fictitious company, has issued an RFP (Request for Proposal) to modify their existing site (or design a completely new experience), so that their customers are more easily able to identify where a specific type of content can be found, locate it, and interact with the site and other users in an intuitive way.</p>

                                <p>The company has already done some preliminary research and has provided information relevant to what they're thinking now, but they are open to new ideas and want new designs to be created prior to selecting a company to do the work.</p>
                            </div>

                            <div className="section">
                                <h3>The Outcome</h3>
                                <p>We created a series of deliverables outlining our ideas for the project and presented samples of them to our client (the professor).</p>
                            </div>

                            <div className="section">
                                <h3>My Contribution</h3>
                                <p>As the project manager, I managed the day-to-day activities of the team, esnured the quality of each deliverable, and was the lead presentor when we showcased our ideas to the client.</p>

                                <p>As a UX designer, I identified user needs and created personas based on the provided user research. I also helped create the site map and wireframes.</p>
                            </div>
                        </div>

                        <div className="overview-2">
                            <h3>Context</h3>
                            <p className="lower-opacity">INFO331 - Introduction to Information Architecture</p>

                            <h3>Time Frame</h3>
                            <p className="lower-opacity">April 2020 - June 2020</p>

                            <h3>My Role</h3>
                            <p className="lower-opacity">Project Manager, UX Designer</p>

                            <h3>Tools</h3>
                            <p className="lower-opacity">Whimisical, Slickplan</p>

                            <h3>Team Members</h3>
                            <p className="lower-opacity">Kayla Chea, Allison Bennett, John Tumenbayer, Roshani Ravi, Vivian Tran</p>
                        </div>
                    </div>
                </section>

                <section id="Business">
                    <h2>BUSINESS CASE</h2>
                    
                    <div className="section">
                        <p>My team started off by anaylzing the provided research and identifying the key issues.</p>
                    
                        <h3>Current Problems</h3>
                        <ul>
                            <li>Website is hard to navigate and frustrating to use.</li>
                            <li>Navigation fails to showcase the variety of content Foodie Fanatic offers.</li>
                            <li>Content items are not linked to other relevant content.</li>
                            <li>Search engine returns irrelevant results.</li>
                        </ul>

                        <p>We then proposed our solution to address these key issues.</p>
                    </div>

                    <div className="section">
                        

                        <h3>Revised Mission Statement</h3>
                        <p>“To solve any culinary need through high-quality resources and to connect the world’s foodies through community-based opportunities.”</p>
                    </div>

                    <div className="section">
                        <h3>Content Strategy</h3>
                        <li>Implement a clear and intuitive taxonomy</li>
                        <li>Showcase relevant content on the home page</li>
                        <li>Create multimedia content</li>
                        <li>Provide content for users of all skills and knowledge</li>
                    </div>
                    
                    <div className="section">
                        <h3>Online Strategy</h3>
                        <li>Optimize website for both desktop and mobile browsing</li>
                        <li>Increase online presence on social media</li>
                        <li>Create an email list</li>
                        <li>Host video content on YouTube</li>
                    </div>

                    <div className="section">
                        <h3>Summary</h3>
                        <p>The Foodie Fanatic site has the potential to be the go-to website for all things food related. However, due to the lack of a clear navigation system and excess content, users are often overwhelmed and leave the website with their needs unmet.</p>
                        <p>Making the website’s content more streamlined, engaging, and relevant and having a clear user flow will make the user experience more enjoyable and promote customer loyalty.​</p>
                    </div>
                </section>

                <section id="Users">
                    <h2>USER PERSONAS</h2>
                    <div className="section">
                        <p>After analyzing the provided research, we created four personas to guide the site's content and layout.</p>
                        <p>(Click image to enlarge)</p>
                        <Zoom>
                            <img className="responsive-image" src="/img/Foodie-Fanatic/user1.png" alt="Profile of a user type"></img>
                        </Zoom>
                        <Zoom>
                            <img className="responsive-image" src="/img/Foodie-Fanatic/user2.png" alt="Profile of a user type"></img>
                        </Zoom>
                        <Zoom>
                            <img className="responsive-image" src="/img/Foodie-Fanatic/user3.png" alt="Profile of a user type"></img>
                        </Zoom>
                        <Zoom>
                            <img className="responsive-image" src="/img/Foodie-Fanatic/user4.png" alt="Profile of a user type"></img>
                        </Zoom>
                    </div>
                </section>

                <section id="Site-map">
                    <h2>SITE MAP</h2>

                    <div className="section">
                        <p>Based on our user personas, weuser needs, we created a site to guide our development of the revised website.</p>
                        <p>(Click image to enlarge)</p>
                        <Zoom>
                            <img className="responsive-image" src="/img/Foodie-Fanatic/sitemap.png" alt="Sitemap outlining framework of the website"></img>
                        </Zoom>
                        <p>Key Aspects</p>
                        <ul>
                            <li>Tabs are arranged based on importance to our users</li>
                            <li>We believe that the majority of our users come to our website to expand their knowledge so learning-based content comes first.</li>
                            <li>'Community' and 'Shop' are for the smaller group of users that want to meet fellow foodies or buy ingredients or kitchensupplies.</li>
                            <li>The 'About' is for users who want to learn more about our company.</li>
                        </ul>
                    </div>
                </section>

                <section id="Wireframes">
                    <h2>WIREFRAMES</h2>

                    <div className="section">
                        <p>Using the above sitemap, we created wireframes of our proposed website.</p>
                        <p>(Click image to enlarge)</p>
                        <SRLWrapper>
                            <img className="responsive-image hover" src="/img/Foodie-Fanatic/wireframe1.png" alt="Sitemap outlining framework of the website"></img>
                            <div id="wireframes">
                                <img className="responsive-image hover" src="/img/Foodie-Fanatic/wireframe2.png" alt="Sitemap outlining framework of the website"></img>
                                <img className="responsive-image hover" src="/img/Foodie-Fanatic/wireframe3.png" alt="Sitemap outlining framework of the website"></img>
                                <img className="responsive-image hover" src="/img/Foodie-Fanatic/wireframe4.png" alt="Sitemap outlining framework of the website"></img>
                                <img className="responsive-image hover" src="/img/Foodie-Fanatic/wireframe5.png" alt="Sitemap outlining framework of the website"></img>
                                <img className="responsive-image hover" src="/img/Foodie-Fanatic/wireframe6.png" alt="Sitemap outlining framework of the website"></img>
                                <img className="responsive-image hover" src="/img/Foodie-Fanatic/wireframe7.png" alt="Sitemap outlining framework of the website"></img>
                            </div>
                        </SRLWrapper>
                    </div>

                    <div className="section">
                        <h3>User Flows</h3>
                        <Zoom>
                            <img className="responsive-image" src="/img/Foodie-Fanatic/flow1.png" alt="Sitemap outlining framework of the website"></img>
                        </Zoom>
                        <Zoom>
                            <img className="responsive-image" src="/img/Foodie-Fanatic/flow2.png" alt="Sitemap outlining framework of the website"></img>
                        </Zoom>
                        <Zoom>
                            <img className="responsive-image" src="/img/Foodie-Fanatic/flow3.png" alt="Sitemap outlining framework of the website"></img>
                        </Zoom>
                    </div>
                </section>

                <section id="Discussion">
                    <h2>DISCUSSION</h2>

                    <div className="section">
                        <h3>Lessons Learned</h3>
                        <p>While working on this project, I have learned a lot of takeaway lessons. Here are a few:</p>
                        <ul>
                            <li>Good information architecture is important because it serves as the foundation for good user experience.</li>
                            <li>Good information architecture allows a user to understand and find the content they need with minimal effort.</li>
                            <li>Labels and naming conventions should be simple, consistent, and clear to reduce confusion and ambiguity.</li>
                            <li>While working on low-fidelity wireframes, it is more important to focus on usability and functionality than visual aspects.</li>
                        </ul>
                    </div>
                </section>
            </div>
            </SimpleReactLightbox>
        </React.Fragment>
    )
}

export default FoodieFanatic;