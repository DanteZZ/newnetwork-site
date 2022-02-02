import React from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import connector from "./connect.js";
import dispatcher from "./dispatch.js";

const Calculator = () => {
  return (
    <Container>
      <Row>
        <Col className="mt-4 mb-2" lg="12">
          <h1 className="h3">Подберите условия для вас</h1>
        </Col>
        <Col lg="9">
          <Card className="text-light bg-grad-primary">
            <Card.Body className="pt-3">
              <center>
                <strong className="h5 text-light">
                  Проверьте, подключен ли ваш дом?
                </strong>
              </center>
              <Form className="mt-2">
                <Form.Group className="mb-2">
                  <Form.Label className="mb-1">Адрес</Form.Label>
                  <Form.Control
                    type="text"
                    className="bordered"
                    placeholder="Введите адрес вашего дома"
                  />
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label className="mb-1">Как вас зовут?</Form.Label>
                      <Form.Control
                        type="text"
                        className="bordered"
                        placeholder="Введите адрес вашего дома"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label className="mb-1">Номер телефона</Form.Label>
                      <Form.Control
                        type="text"
                        className="bordered"
                        placeholder="Введите адрес вашего дома"
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="3">
          <h1 className="h3">Подберите условия для вас</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default connect(connector, dispatcher)(Calculator);
