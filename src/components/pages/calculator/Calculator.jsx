import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider, { Range } from "rc-slider";
import Switch from "react-switch";

import { connect } from "react-redux";
import connector from "./connect.js";
import dispatcher from "./dispatch.js";

import wifi_standart from "../../../assets/images/wifi_standart.png";

const MaterialSwitch = (props) => (
  <Switch
    onColor="#5E85FD"
    handleDiameter={18}
    uncheckedIcon={false}
    checkedIcon={false}
    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
    height={22}
    width={42}
    {...props}
  />
);

const Calculator = () => {
  return (
    <Container>
      <Row>
        <Col className="mt-4 mb-4" lg="12">
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
          <div className="down-arrow-block" />
          <div className="h4 text-center mb-5">Выберите скорость интернета</div>
          <div className="speed-select">
            <Slider
              min={0}
              max={2}
              defaultValue={0}
              marks={{
                0: (
                  <>
                    30 <small>мбит/с</small>
                  </>
                ),
                1: (
                  <>
                    50 <small>мбит/с</small>
                  </>
                ),
                2: (
                  <>
                    100 <small>мбит/с</small>
                  </>
                ),
              }}
              included={false}
              step={null}
              trackStyle={{ backgroundColor: "#5971DD", height: 6 }}
              railStyle={{ backgroundColor: "#E2E2E2", height: 6 }}
              handleStyle={{
                borderColor: "#5971DD",
                height: 26,
                width: 26,

                marginTop: -10,
                backgroundColor: "#5971DD",
              }}
              dotStyle={{
                borderColor: "#E2E2E2",
                height: 14,
                width: 14,
                top: -4,
                backgroundColor: "#E2E2E2",
              }}
              activeDotStyle={{
                backgroundColor: "#5971DD",
                borderColor: "#5971DD",
              }}
            />
            <div className="text-center content mt-5 pt-3">
              Подойдёт для постоянного использования интернета с ПК и ТВ
            </div>
          </div>
          <div className="down-arrow-block" />
          <div className="h4">Оборудование</div>
          <div className="d-flex justify-content-between mt-4 mb-3">
            <div className="h5 text-primary">Wi-Fi Роутер</div>
            <span className="d-flex align-items-center content">
              <span className="me-2">Взять в аренду</span>
              <MaterialSwitch checked={true} />
            </span>
          </div>
          <Row className="equipment-list">
            <Col lg="4">
              <div className="equipment-item active">
                <img src={wifi_standart} alt="" />
                <span className="equipment-name">Обычный</span>
              </div>
            </Col>
            <Col lg="4">
              <div className="equipment-item">
                <img src={wifi_standart} alt="" />
                <span className="equipment-name">Обычный</span>
              </div>
            </Col>
            <Col lg="4">
              <div className="equipment-item none">Не требуется</div>
            </Col>
          </Row>
        </Col>
        <Col lg="3">
          <div className="receipt-card content">
            <p className="h5 text-center">Чек-лист</p>
            <hr className="mb-0" />
            <div className="receipt-item">
              <div className="receipt-position">Подключение интернета</div>
              <div className="receipt-price">Бесплатно</div>
            </div>
            <hr className="dashed" />
            <div className="receipt-item">
              <div className="receipt-position">Wi-Fi Роутер</div>
              <div className="receipt-price">1 500 руб.</div>
            </div>
            <hr className="dashed" />
            <div className="receipt-item">
              <div className="receipt-position">ТВ-Приставка</div>
              <div className="receipt-price">3 000 руб.</div>
            </div>
            <hr />

            <div className="receipt-item">
              <div className="receipt-position">
                <strong>Итого:</strong>
              </div>
              <div className="receipt-price">1 500 руб.</div>
            </div>
            <hr className="dashed" />
            <div className="receipt-item">
              <div className="receipt-position">
                <strong>Ежемесячный платёж:</strong>
              </div>
              <div className="receipt-price">3 000 руб.</div>
            </div>
            <center>
              <Button className="btn-gradient-primary ps-4 pe-4 mt-3">
                Оформить заявку
              </Button>
            </center>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default connect(connector, dispatcher)(Calculator);
