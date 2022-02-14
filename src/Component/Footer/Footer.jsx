import React from "react";
import './Footer.css'
import '../Mains/Responsive/ResponFooter.css'
import { Container,Col,Row } from "react-bootstrap";

const Footer = () => {
  return (
    <>
    <div className="kakek-footer">
      <div className="bapak-footer">
        <Container>
          <div className="contact">
            <p >Ada pertanyaan? Hubungi 007-803-321-2148</p>
          </div>
          <div className="content-link">
            <Row lg='4' xs='2' md='4'>
              <Col>
                <p>Tanya jawab</p>
                <p>Hubungi investor</p>
                <p>Ketentuan Penggunaan</p>
                <p>Hubungi kami</p>
              </Col>
              <Col>
              <p>Pusat bantuan</p>
              <p>Lowongan kerja</p>
              <p>Privasi</p>
              <p>Uji kecepatan</p>
              </Col>
              <Col>
              <p>Akun</p>
              <p>Tukar kartu hadiah</p>
              <p>Preferensi Cookie</p>
              <p>Informasi Legal</p>
              </Col>
              <Col>
              <p>Pusat media</p>
              <p>Cara menonton</p>
              <p>Informasi Perusahaan</p>
              <p>Hanya di KonFlix</p>
              </Col>
            </Row>
          </div>

        </Container>
      </div>
      </div>
    </>
  );
};

export default Footer;
