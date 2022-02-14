import { React, Fragment } from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

const ListMovie = (props) => {
  return (
    <Fragment>
      <Container>
        <Row lg="5" className="justify-content-center">
          {props.ListMovies.map((data, index) => {
            return (
              <Col className="m-3">
                <Card key={index} style={{ width: "14rem" }}>
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                  />
                  <Card.Body>
                    <Card.Title>{data.original_title}</Card.Title>
                    <Button variant="primary">Go Detail</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Fragment>
  );
};

export default ListMovie;
