import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { connect } from "react-redux";
import { Packages } from "../../shared/Packages.jsx";
import { Specials } from "../../shared/Specials.jsx";
import { Carousel } from "./components/Carousel.jsx";
import connector from "./connect.js";
import dispatcher from "./dispatch.js";

const Home = () => {
  return (
    <Container>
      <Carousel />
      <Row>
        <Col>
          <Packages />
          <Specials />
        </Col>
      </Row>
    </Container>
  );
};

export default connect(connector, dispatcher)(Home);
