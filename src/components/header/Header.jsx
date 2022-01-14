import React from "react";
import { Navbar, NavDropdown, Image } from "react-bootstrap";

import logo from "../../assets/images/logo_header.png";
import empty_avatar from "../../assets/images/user.png";

import { connect } from "react-redux";
import connector from "./connect.js";
import dispatcher from "./dispatch.js";

const Header = () => {
  return (
    <Navbar bg="light" fixed="top" expand="lg">
      <Navbar.Brand className="logo cursor-pointer">
        <img
          src={logo}
          className="d-inline-block align-top logo__image"
          alt="React Bootstrap logo"
        />
        HomeLib
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Image src={empty_avatar} className="avatar" roundedCircle />
        <NavDropdown className="d-inline-block">
          <NavDropdown.Item>Выйти</NavDropdown.Item>
        </NavDropdown>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default connect(connector, dispatcher)(Header);
