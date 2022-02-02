import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { connect } from "react-redux";

import connector from "./connect.js";
import dispatcher from "./dispatch.js";

import { help_phone, help_info } from "../../../configs/data";
import { HelpCategory } from "./components/HelpCategory.jsx";

const Help = () => {
  return (
    <Container>
      <Row>
        <Col className="mt-3 content">
          <h1 className=" h3 mt-3 mb-3">Помощь</h1>
          Выберите подходящий для вас вопрос.
          <br />
          Если вы не нашли необходимую информацию, Вы всегда можете задать свой
          вопрос на горячей линии:{" "}
          <a href={"tel:" + help_phone}>{help_phone}</a>
          <hr />
        </Col>
      </Row>
      {help_info.map((i) => (
        <HelpCategory {...i} />
      ))}
    </Container>
  );
};

export default connect(connector, dispatcher)(Help);
