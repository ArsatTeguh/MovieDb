import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Main1.css";
import './Responsive/Responsive1.css'

const video = function () {
  return document.getElementById("vid").play();
};
console.log(video)

const Main1 = () => {
  return (
    <>
      <div className="containers-main1">
        <Container>
          <Row lg='2' md='2'>
            <Col>
          <div className="content-main1">
            <h2>Nikmati di TV-mu</h2>
            <p>
              Tonton di Smart TV, Playstation, Xbox, Chromecast, Apple TV,
              Pemutar Blu-ray, dan banyak lagi
            </p>
          </div>
          </Col>
          <Col>
          <div className="container-parent1">
            <div className="img-main1">
              <img
                className="img-video"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                alt=""
              />
              <div className="videos">
                <video
                  autoPlay
                  playsInline
                  muted
                  loop
                  id="vid"
                  className="video"
                >
                  <source
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                    type="video/mp4"
                  ></source>
                </video>
              </div>
            </div>
          </div>
          </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Main1;
