import React from "react";
import './Main4.css'
import './Responsive/Responsive4.css'
import { Container,Col,Row } from "react-bootstrap";

const Main4 = () => {
  return (
    <>
      <div className="bapak-main4">
        <Container>
          <Row lg='2' md='2' xs='1'>
            <Col>
              <div className="img-main4">
                <img className="gambar-main4" src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABW2X42Pmxcgf1ynD812FgSoitu3S7420upoTphfm-2vhsNvZDRiKDRXcrrOnMjtbOAwM_xsdYM7WHQ2rgMYyXOJ53ZzE.png?r=fee" alt="" />
              </div>
            </Col>
            <Col>
              <div className="text-main4">
                <h4>Buat Profil untuk anak.</h4>
                <p>
                  Kirim anak-anak untuk bertualang bersama karakter favorit
                  mereka di dunia yang dibuat khusus untuk mereka gratis dengan
                  keanggotaanmu.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Main4;
