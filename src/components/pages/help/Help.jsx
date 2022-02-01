import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { connect } from "react-redux";

import connector from "./connect.js";
import dispatcher from "./dispatch.js";

const Help = () => {
  return (
    <Container>
      <Row>
        <Col className="mt-5"></Col>
      </Row>
    </Container>
  );
};

export default connect(connector, dispatcher)(Help);
