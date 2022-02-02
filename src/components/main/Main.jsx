import React from "react";
import { Container, Row, Spinner, Col } from "react-bootstrap";
import { connect } from "react-redux";
import connector from "./connect.js";
import dispatcher from "./dispatch.js";
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";

import Home from "../pages/home/Home.jsx";
import Services from "../pages/services/Services.jsx";
import Help from "../pages/help/Help.jsx";
import Calculator from "../pages/calculator/Calculator.jsx";

const Main = ({ isLoaded }) => {
  const location = useLocation();
  return true ? (
    <>
      <Header />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={200}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/help" element={<Help />} />
            <Route exact path="/calculator" element={<Calculator />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
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
