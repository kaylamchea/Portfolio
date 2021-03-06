import React from "react";
import buddy from "../images/buddy.png";

function Buddy() {
    return (
        <div className="case-study-page">
            <img src={buddy}></img>
            <h1 className="py-3">buddy.</h1>
            <div className="overview">
                <div >
                    <h2>deliverables</h2>
                    <p>high-fidelity wireframes</p>
                    <p>pitch deck</p>
                </div>
                <div>
                    <h2>tools used</h2>
                    <p>whimsical</p>
                    <p>figma</p>
                    <p>react</p>
                    <p>firebase</p>
                </div>
                <div>
                    <h2>my role</h2>
                    <p>user research</p>
                    <p>visual design</p>
                    <p>wireframes</p>
                    <p>user experience</p>
                    <p>front end dev</p>
                </div>
                <div>
                    <h2>contributors</h2>
                    <p>ashni shah</p>
                    <p>david mai</p>
                    <p>winnie ma</p>
                </div>
                <div>
                    <h2>timeline</h2>
                    <p>3 months</p>
                </div>
            </div>
            <div>
                <h2>summary</h2>
                <p>
                    All Informatics students are required to complete a capstone project where we design, build, and deploy a product of our choice over the span of 6 months.
                </p>
                <p className="pt-3">My group was interested in the mental well-being of college students and came up with buddy, a web app that makes building healthy habits easy for college students. It removes the difficulties of sticking to new habits by using gamification to promote motivation and engagement.</p>

                <h1 className="pt-5">Thank you for your interest, but this case study is still under construction! In the meantime, feel free to check out this <a className="highlight" href="https://docs.google.com/presentation/d/1nIULL4lzHFvtbFKlrduDBLHSiMa_cZu_F9MiB7duWjw/edit#slide=id.g79e1b83e64_2_259" target="_blank" rel="noopener noreferrer">overview.</a></h1>
            </div>
        </div>
    )
}

export default Buddy;