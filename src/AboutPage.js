import React, { useState, useEffect } from 'react';
import './AboutPage.css';

function AboutPage() {
    return (
        <div className="about">
            <img alt="" src="/img/me.jpg" className="about-img"></img>
            <div className="about-text">
                <h1>A bit about me~</h1>
                <p>Hey there, my name is <strong>Kayla</strong>, and I am a <strong>UX designer and developer</strong> based in Seattle, WA <span role="img" aria-label="tree">🌲</span>. I am currently studying Informatics at the University of Washington ('22).</p>
                <p>My road to design has been a bumpy but rewarding ride. From a young age, I have been <strong>passionate about helping others</strong>. This interest, combined with parental influence, led me down the path of medicine <span role="img" aria-label="female doctor">👩🏻‍⚕️</span>. Although I wasn't interested in the natural sciences, I knew I wanted a job that helped others and settled for a path in medicine.</p>
                <p>The direction of my life changed, however, when I discovered the field of design in university. I soon realized the importance of design in our everyday lives and its <strong>powerful impact on the human experience</strong>. I instantly fell in love with design process <span role="img" aria-label="light bulb">💡</span>, from the user research to the development.</p>
                <p>I am passionate about <strong>designing for social impact</strong> and aspire to create humane and inclusive products that make the world <span role="img" aria-label="earth">🌍</span> a better place, or more realistically, do more good than harm to the world.</p>
                <p>When I am not designing, you can find me playing indie games <span role="img" aria-label="game controller">🎮</span>, watching anime, tutoring students, or serving as an officer for <a href="https://winfo.ischool.uw.edu/" target="_blank" rel="noopener noreferrer">WINFO</a> and <a href="https://www.facebook.com/SudoUW/" target="_blank" rel="noopener noreferrer">SUDO</a>, two organizations dedicated to promoting diversity in tech.</p>
                <p>Feel free to <a href="mailto: kaylamchea@hotmail.com">contact me</a> if you would like to chat!!</p>
            </div>
        </div>
    );
}

export default AboutPage;