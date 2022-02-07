import React from "react";
import { Nav, Navbar, NavDropdown, Button } from "react-bootstrap";

import logo from "../../assets/images/logo_header.png";
import { Link, useLocation } from "react-router-dom";

import { connect } from "react-redux";
import connector from "./connect.js";
import dispatcher from "./dispatch.js";

const Header = () => {
  const location = useLocation();
  const navs = [
    { to: "/", title: "Интернет" },
    { to: "/services", title: "Пакеты услуг" },
    { to: "/tv", title: "Онлайн-ТВ" },
    { to: "/help", title: "Помощь" },
  ];

  return (
    <Navbar className="header pe-0 d-flex" fixed="top" collapseOnSelect expand="lg">
      <Navbar.Brand className="logo cursor-pointer">
        <img
          src={logo}
          className="d-inline-block align-top logo__image"
          alt="Новые сети"
        />
      </Navbar.Brand>
      <Navbar.Toggle className="no-border" />
      <Navbar.Collapse>
        <Nav activeKey={location.pathname} className="flex-grow-1">
          {navs.map((i, k) => (
            <Nav.Link
              className="ms-2"
              key={k}
              as={Link}
              eventKey={i.to}
              to={i.to}
            >
              {i.title}
            </Nav.Link>
          ))}
        </Nav>
        <div className="justify-content-end">
          <Button variant="gradient-primary" className="me-2">
            Хочу стать абонентом
          </Button>
          <NavDropdown title="Личный кабинет" className="d-inline-block">
            <NavDropdown.Item>Выйти</NavDropdown.Item>
          </NavDropdown>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default connect(connector, dispatcher)(Header);
