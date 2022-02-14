import React from "react";
import "./HeaderContent.css";
import { Container } from "react-bootstrap";

const HeaderContent = (props) => {
  return (
    <>
      <div className="content-header">
        <Container>
          <div className="galery">
            {props.image.map((data, index) => {
              return (
                <div key={index} className="img-content-header">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </>
  );
};

export default HeaderContent;
