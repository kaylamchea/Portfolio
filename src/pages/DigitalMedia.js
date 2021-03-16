import React from 'react';
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './DigitalMedia.css';

function DigitalMedia() {
    const options = {
        settings: {
            disablePanzoom: true
        }
    };

    return (
        <React.Fragment>
            <div className="digital-desc">
                <h1>Digital Media</h1>
                <p>(Click to enlarge)</p>
            </div>
            <SimpleReactLightbox>
                <SRLWrapper options={options}>
                    <Container>
                        <Row className="py-1">
                            <Col xs={12} md={12} lg={6}>
                                <a href="/img/hackathon_mentor.png" data-attribute="SRL">
                                    <img src="/img/hackathon_mentor.png" alt="Mentor Recruitment Poster for WINFO Hackathon" />
                                </a>
                            </Col>
                            <Col xs={12} md={12} lg={6}>
                                <a href="/img/hackathon_prizes.png" data-attribute="SRL">
                                    <img src="/img/hackathon_prizes.png" alt="List of WINFO Hackathon Prizes" />
                                </a>
                            </Col>
                        </Row>
                        <Row className="py-1">
                            <Col xs={12} md={12} lg={6}>
                                <a href="/img/hackathon_banner.png" data-attribute="SRL">
                                    <img src="/img/hackathon_banner.png" alt="Event Banner for WINFO Hackathon" />
                                </a>
                            </Col>
                            <Col xs={12} md={12} lg={6}>
                                <a href="/img/hackathon_sticker.png" data-attribute="SRL">
                                    <img src="/img/hackathon_sticker.png" alt="Sticker for WINFO Hackathon" />
                                </a>
                            </Col>
                        </Row>
                        <Row className="py-1">
                            <Col xs={12} md={12} lg={6}>
                                <a href="/img/infographic.png" data-attribute="SRL">
                                    <img src="/img/infographic.png" alt="Infographic of Yuzuru Hanyu" />
                                </a>
                            </Col>
                            <Col xs={12} md={12} lg={6}>
                                <a href="/img/11_11.png" data-attribute="SRL">
                                    <img src="/img/11_11.png" alt="Illustration of Girl Blowing a Dandelion" />
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </SRLWrapper>
            </SimpleReactLightbox>
        </React.Fragment>
    );
}

export default DigitalMedia;