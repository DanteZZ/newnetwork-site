import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { Packages } from "../../shared/Packages.jsx";
import connector from "./connect.js";
import dispatcher from "./dispatch.js";

import intersect from "../../../assets/images/intersect.png";

const Services = () => {
  return (
    <Container>
      <Row>
        <Col className="mt-5">
          <h1 hidden>Тарифы</h1>
          <Packages />
          <Link to={"/calculator"} className="intersect">
            <img src={intersect} alt="" />
            Подобрать собственный тариф
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default connect(connector, dispatcher)(Services);
