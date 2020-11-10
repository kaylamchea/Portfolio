import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './CaseStudy.css';

function CaseStudy({ name, category, time, desc, url, linkText, img, alt, text, arrow, disabled}) {

    return (
        <div className="case-study">
            <div>
                <h1>
                    <Link to={url} className={disabled}>{name}</Link>
                </h1>
                <p className="project-cat">{category} | {time}</p>
                <p>{desc}</p>
                <Link to={url} className={disabled}><strong>{linkText}</strong> </Link>
                <span role="img" aria-label="right arrow">{arrow}</span>
            </div>
            <Link to={url} className={disabled}>
                <img src={img} alt={alt}></img>
            </Link>
        </div>
    );
}

export default CaseStudy;