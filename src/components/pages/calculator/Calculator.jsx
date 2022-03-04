import React, { useMemo, useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider, { Range } from "rc-slider";
import Switch from "react-switch";
import MaskedInput from "react-maskedinput";

import { connect } from "react-redux";
import connector from "./connect.js";
import dispatcher from "./dispatch.js";

import { routers, tvs, pricelist } from "../../../configs/data.js";

const format = (number) =>
  new Intl.NumberFormat("ru-RU", { style: "currency", currency: "RUB" }).format(
    number
  );

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

const Calculator = ({
  address,
  name,
  phone,
  speed,
  router,
  router_rent,
  tv,
  tv_rent,
  updateAddress,
  updateName,
  updatePhone,
  updateSpeed,
  updateRouter,
  updateRouterRent,
  updateTv,
  updateTvRent,
}) => {
  const [prices] = useState(pricelist);

  const receipt = useMemo(() => {
    const rub_m = "мес";
    const list = [];
    let all = 0;
    let all_rent = 0;

    list.push(["Подключение интернета", "Бесплатно"]);

    list.push(["Интернет", `${format(prices.speeds[speed])}/${rub_m}`]);
    all_rent += prices.speeds[speed];

    if (router) {
      list.push([
        "Wi-Fi Роутер",
        router_rent
          ? `${format(prices.routers_rent[router])}/${rub_m}`
          : `${format(prices.routers[router])}`,
      ]);
      if (router_rent) {
        all_rent += prices.routers_rent[router];
      } else {
        all += prices.routers[router];
      }
    }

    if (tv) {
      list.push([
        "ТВ-Приставка",
        tv_rent
          ? `${format(prices.tvs_rent[tv])}/${rub_m}`
          : `${format(prices.tvs[tv])}`,
      ]);
      if (tv_rent) {
        all_rent += prices.tvs_rent[tv];
      } else {
        all += prices.tvs[tv];
      }
    }

    return { list, all: format(all), all_rent: format(all_rent) };
  }, [prices, speed, router, router_rent, tv, tv_rent]);

  return (
    <Container>
      <Row className="mb-4">
        <Col className="mt-4 mb-4" lg="12">
          <h1 className="h3">Подберите условия для вас</h1>
        </Col>
        <Col lg="9">
          <Card className="text-light bg-grad-primary">
            <Card.Body className="pt-3">
              <center>
                <strong className="h5 text-light">
                  Введите информация о себе
                </strong>
              </center>
              <Form className="mt-2">
                <Form.Group className="mb-2">
                  <Form.Label className="mb-1">Адрес</Form.Label>
                  <Form.Control
                    type="text"
                    className="bordered"
                    placeholder="Введите адрес вашего дома"
                    value={address}
                    onChange={(v) => updateAddress(v.target.value)}
                  />
                </Form.Group>
                <Row>
                  <Col md="6" sm="12">
                    <Form.Group>
                      <Form.Label className="mb-1">Как вас зовут?</Form.Label>
                      <Form.Control
                        type="text"
                        className="bordered"
                        placeholder="Введите ваше имя"
                        value={name}
                        onChange={(v) => updateName(v.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label className="mb-1">Номер телефона</Form.Label>
                      <Form.Control
                        type="text"
                        as={MaskedInput}
                        mask="+7 (111) 111-11-11"
                        className="bordered"
                        placeholder="+7 (123) 456-78-90"
                        value={phone}
                        onChange={(v) => updatePhone(v.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
          <div className="down-arrow-block" />
          <div className="h4 text-center mb-5">Выберите скорость интернета</div>
          <div className="speed-select d-none d-sm-block">
            <Slider
              min={0}
              max={2}
              value={speed}
              onChange={updateSpeed}
              className="d-xs-none"
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

          <div className="speed-select d-sm-none d-xs-block">
            <Slider
              min={0}
              max={2}
              value={speed}
              onChange={updateSpeed}
              vertical
              reverse
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
                backgroundColor: "#5971DD",
                left:0
              }}
              dotStyle={{
                borderColor: "#E2E2E2",
                height: 14,
                width: 14,
                backgroundColor: "#E2E2E2",
                marginLeft: "-7px"
              }}
              activeDotStyle={{
                backgroundColor: "#5971DD",
                borderColor: "#5971DD",
                left:"0px"
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
              <MaterialSwitch
                checked={router_rent}
                onChange={updateRouterRent}
              />
            </span>
          </div>
          <Row className="equipment-list">
            {routers.map(({ tag, title, image }) => (
              <Col lg="4" sm="6" xs="12" key={tag} onClick={() => updateRouter(tag)}>
                <div
                  className={
                    router === tag ? "equipment-item active" : "equipment-item"
                  }
                >
                  <img src={image} alt="" />
                  <span className="equipment-name">{title}</span>
                </div>
              </Col>
            ))}
            <Col lg="4" sm="6" xs="12" onClick={() => updateRouter(null)}>
              <div
                className={
                  router === null
                    ? "equipment-item none active"
                    : "equipment-item none"
                }
              >
                Не требуется
              </div>
            </Col>
          </Row>

          <div className="d-flex justify-content-between mt-4 mb-3">
            <div className="h5 text-primary">TV-Приставка</div>
            <span className="d-flex align-items-center content">
              <span className="me-2">Взять в аренду</span>
              <MaterialSwitch checked={tv_rent} onChange={updateTvRent} />
            </span>
          </div>
          <Row className="equipment-list">
            {tvs.map(({ tag, title, image }) => (
              <Col lg="4" sm="6" xs="12" key={tag} onClick={() => updateTv(tag)}>
                <div
                  className={
                    tv === tag
                      ? "equipment-item red active"
                      : "equipment-item red"
                  }
                >
                  <img src={image} alt="" />
                  <span className="equipment-name">{title}</span>
                </div>
              </Col>
            ))}
            <Col lg="4" sm="6" xs="12" onClick={() => updateTv(null)}>
              <div
                className={
                  tv === null
                    ? "equipment-item red none active"
                    : "equipment-item red none"
                }
              >
                Не требуется
              </div>
            </Col>
          </Row>
        </Col>
        <Col lg="3">
          <div className="receipt-card content">
            <p className="h5 text-center">Чек-лист</p>
            <hr className="mb-0" />
            <div className="prices">
              <div className="receipt-first">
                {receipt.list.map(([position, price], i) => (
                  <>
                    {i > 0 && <hr className="dashed" />}
                    <div className="receipt-item">
                      <div className="receipt-position">{position}</div>
                      <div className="receipt-price">{price}</div>
                    </div>
                  </>
                ))}
              <hr />
              </div>
            
              <div className="receipt-second">
                <div className="receipt-item">
                  <div className="receipt-position">
                    <strong>Итого:</strong>
                  </div>
                  <div className="receipt-price">{receipt.all}</div>
                </div>
                <hr className="dashed" />
                <div className="receipt-item">
                  <div className="receipt-position">
                    <strong>Ежемесячный платёж:</strong>
                  </div>
                  <div className="receipt-price">{receipt.all_rent}</div>
                </div>
              </div>
              <center>
                <Button className="btn-gradient-primary ps-4 pe-4 mt-3 receipt-order">
                  Оформить заявку
                </Button>
              </center>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <hr />
        <p className="content">
          При нажатии на кнопку “Оформить заявку”, вы соглашаетесь с{" "}
          <Link to="/pages/privacy">
            условиями обработки персональных данных
          </Link>
          .
          <br />
          После оформления заявки с вами свяжется наш менеджер для уточнения
          информации.
          <br />
          Спасибо что выбрали нас
        </p>
        <hr />
      </Row>
    </Container>
  );
};

export default connect(connector, dispatcher)(Calculator);
