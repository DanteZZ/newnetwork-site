import React, { useMemo, useState } from "react";
import {
  Row,
  Card,
  Col,
  Form,
  Button,
  Badge,
  ProgressBar,
  Alert,
} from "react-bootstrap";

import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faFilter,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";
import connector from "./connect.js";
import dispatcher from "./dispatch.js";

const Home = () => {
  return <div>Главная</div>;
};

export default connect(connector, dispatcher)(Home);
