import React from "react";
import { Container, Row, Spinner, Col } from "react-bootstrap";
import { connect } from "react-redux";
import connector from "./connect.js";
import dispatcher from "./dispatch.js";
import { Routes, Route } from "react-router-dom";

import Header from "../header/Header.jsx";

import Home from "../pages/home/Home.jsx";

const Main = ({ isLoaded }) => {
  return true ? (
    <>
      <Header />
      <Container fluid>
        <Row className="mt-5 pt-2" style={{ marginBottom: "6px" }} />
        <Row>
          <Col>
            <div className="p-3 pt-0">
              <Routes>
                <Route exact path="/" element={<Home />} />
              </Routes>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  ) : (
    <>
      <Container
        className="d-flex vh-100 align-items-center justify-content-center bg-auth"
        fluid
      >
        <Spinner animation="border" variant="warning" />
      </Container>
    </>
  );
};

export default connect(connector, dispatcher)(Main);
