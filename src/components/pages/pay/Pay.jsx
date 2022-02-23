import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Alert, Spinner } from "react-bootstrap";

import { connect } from "react-redux";
import connector from "./connect.js";
import dispatcher from "./dispatch.js";

const Pay = ({pay}) => {

  const [agrnum, setAgrnum] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const payHandler = async () => {
    setError(null);
    let amnt = parseInt(amount);
    
    if (!agrnum) {
      setError("Введите номер лицевого счёта");
      return false;
    }

    if (!amnt || amnt == 0) {
      setError("Сумма не может быть меньше 1 рубля");
      return false;
    }

    setLoading(true)

    try {
      const { data } = await pay(agrnum,amount);
      if (data?.formUrl) {
        window.location.href = data?.formUrl;
      };
    } catch (e) {
      if (e.response?.data?.error) {
        setError("Проверьте номер договора");
      } else {
        setError("Нет связи с сервером. Попробуйте позже, или свяжитесь с тех. поддержкой")
      }
    }
    setLoading(null);
  }

  return (
    <Container>
      <Row>
        <Col className="mt-5">
          <h1 className="h3 mb-4">Оплата услуг</h1>
          <Card>
            <Card.Body>
              <Row>
                <Col md="6">
                  <Form.Group className="mb-2">
                    <Form.Label className="mb-1">Номер лицевого счёта</Form.Label>
                    <Form.Control
                      type="text"
                      className="bordered"
                      placeholder="Введите номер лицевого счёта (договора)"
                      value={agrnum}
                      onChange={(v)=>setAgrnum(v.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col md="6">
                  <Form.Group className="mb-2">
                    <Form.Label className="mb-1">Сумма (руб.)</Form.Label>
                    <Form.Control
                      type="number"
                      className="bordered"
                      placeholder="Введите сумму"
                      value={amount}
                      onChange={(v)=>setAmount(v.target.value)}
                    />
                  </Form.Group>
                </Col>
                {
                  error && (
                    <Col md="12">
                      <Alert variant="danger">{error}</Alert>
                    </Col>
                  )
                }
                <Col md="12" className="d-flex justify-content-between mt-2">
                  <small className="text-secondary">Оплата производится через сервисы<br/> Сбербанк.Эквайринг</small>
                  <Button onClick={payHandler}>Перейти к оплате {loading && (<Spinner 
                  className="ms-1"
                  as="span"
      animation="border"
      size="sm"
      role="status"
      aria-hidden="true" />) }</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default connect(connector, dispatcher)(Pay);
