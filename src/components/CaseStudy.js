import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './CaseStudy.css';

function CaseStudy({ name, category, time, desc, url, img, alt}) {

    return (
        <div className="case-study">
            <Link to={url}>
                <img src={img} alt={alt}></img>
            </Link>
            {/* <div>
                <h1>
                    <Link to={url}>{name}</Link>
                </h1>
                <p className="project-cat lower-opacity">{category} | {time}</p>
                <p>{desc}</p>
                    <Link to={url} className="highlight"><strong>Read more</strong><span role="img" aria-label="right arrow">→</span></Link>
            </div>
            <Link to={url}>
                <img src={img} alt={alt}></img>
            </Link> */}
        </div>
    );
}

export default CaseStudy;