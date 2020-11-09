import React from 'react';
import './NexusBuilders.css';
import Scrollspy from 'react-scrollspy';
import ProgressBar from "react-progressbar-on-scroll";


function NexusBuilders() {
    return (
        <React.Fragment>
            <ProgressBar color="#5b64e1" />
            <img src="https://images.unsplash.com/photo-1602526432604-029a709e131c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"></img>

            <div className="sticky">
                <Scrollspy
                    className="scrollspy" items={['section-1', 'section-2', 'section-3', 'section-4', 'section-5']}
                    currentClassName="isCurrent">
                    <li><a href="#section-1">section 1</a></li>
                    <li><a href="#section-2">section 2</a></li>
                    <li><a href="#section-3">section 3</a></li>
                    <li><a href="#section-4">section 4</a></li>
                    <li><a href="#section-5">section 5</a></li>
                </Scrollspy>
            </div>

            <div>
                <section id="section-1">
                    <h2>Section 1</h2>
                    <p></p>
                </section>
                <section id="section-2">
                    <h2>Section 2</h2>
                    <p></p>
                </section>
                <section id="section-3">
                    <h2>Section 3</h2>
                    <p></p>
                </section>
                <section id="section-4">
                    <h2>Section 4</h2>
                    <p></p>
                </section>
                <section id="section-5">
                    <h2>Section 5</h2>
                    <p></p>
                </section>
            </div>
        </React.Fragment>
    )
}

export default NexusBuilders;