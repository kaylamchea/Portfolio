import React from 'react';

import './Playground.css';

import ExtraProject from './ExtraProject';

function Playground() {
    return (
        <React.Fragment>
            <div className="playground-desc">
                <h1>Additional Work</h1>
                <p>Here is a collection of other projects I have worked on!</p>
            </div>
            <div className="extra-cases">
                <ExtraProject disabled="disabled" text="Coming soon" name="My Portfolio" category="Front-End Development, UX/UI Design" time=" | Winter 2020" desc="Designing and building my portfolio from scratch." img="/img/portfolio.png" url={process.env.PUBLIC_URL + '/playground/digital-media'}></ExtraProject>
                <ExtraProject highlight="highlight" arrow="→" text="Read more" name="Digital Media" category="Infographic, Illustration" desc="A collection of graphic design works." img="/img/art.png" url={process.env.PUBLIC_URL + '/playground/digital-media'}></ExtraProject>
            </div>
        </React.Fragment>
    );
}

export default Playground;