import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './CaseStudy.css';

import buddy from "../images/buddy.png";

function CaseStudy({ name, category, time, desc, url, img, alt }) {
    return (
        <div className="case-study">
            <a href={process.env.PUBLIC_URL + "/work/buddy"}><img src={buddy}></img></a>
            <h1 className="case-title mt-4">
                <a href={process.env.PUBLIC_URL + "/work/buddy"}>buddy</a> ↗︎
            </h1>
            <p className="mt-4"><strong>ux research and design —</strong> gamifying habit building to improve the well-being of college students</p>
        </div>
    );
}

export default CaseStudy;