import React from "react";
import { Container } from "react-bootstrap";
import "./Header.css";
import "../Mains/Responsive/ResponHeader.css";
import logo from "../Util/logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()

  const btn = () => {
    navigate('/datauser')
  } 

  return (
    <>
      <Container>
        <div className="bapak-headers">
          <div className="bapak-header">
            <div className="logo">
              <img className="img-logo" src={logo} alt="" />
            </div>
            <div className="btn-masuk">
              <button onClick={btn} className="btn-logo">Loker</button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Header;
