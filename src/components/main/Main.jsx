import React from "react";
import { Container, Row, Spinner, Col } from "react-bootstrap";
import { connect } from "react-redux";
import connector from "./connect.js";
import dispatcher from "./dispatch.js";
import { Routes, Route } from "react-router-dom";

import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";
import Home from "../pages/home/Home.jsx";
import Services from "../pages/services/Services.jsx";

const Main = ({ isLoaded }) => {
  return true ? (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/services" element={<Services />} />
      </Routes>
      <Footer />
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
