import React from "react";
import './main3.css'
import './Responsive/Responsive3.css'
import { Container, Row, Col } from "react-bootstrap";

const Main3 = () => {
  return (
    <>
    <div className="bapak-main3">
      <Container>
        <Row lg='2' md='2' xs='1'>
          <Col>
            <div className="text-main3">
              <h4>Tonton dimana pun.</h4>
              <p>
                Streaming film dan acara TV tak terbatas di ponsel, tablet,
                laptop, dan TV-mu.
              </p>
            </div>
          </Col>
     
        <Col>
            <div className="media-main3">
          <div className="img-main3">
            <img className="gambars-main3" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-id.png" alt="" />
          </div>
          <div className="videos-main3">
            <video className="video-main3" muted loop autoPlay>
            <source  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-id.m4v" type="video/mp4"></source>
            </video>
          </div>
          </div>
        </Col>
        </Row>
      </Container>
      </div>
    </>
  );
};
export default Main3
