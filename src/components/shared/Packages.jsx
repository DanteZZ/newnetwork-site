import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { UpdateCalculator } from "../../.store/calculator/actions/updateCalculator.js";

const Package = ({ variant, speed, pay, link, onClick }) => {
  return (
    <Col lg="3" className="mb-4" as={Link} to={link} onClick={onClick}>
      <Card className={"package-item variant-" + variant}>
        <Card.Body>
          <div className="item--speed">
            {speed}
            <div className="item--speed-mark">мбит/с</div>
          </div>
          <ul className="item--info">
            <li>Подключение бесплатно</li>
            <li>Wi-Fi Роутер</li>
            <li>ТВ-приставка</li>
          </ul>
        </Card.Body>
        <Card.Footer>
          <small className="item--payname">Абонентская плата</small>
          <div className="item--pay">
            {pay} <div className="item--pay-mark">р./мес</div>
          </div>
        </Card.Footer>
      </Card>
    </Col>
  );
};

const Packages = ({ title, updateCalculator }) => {
  const packages = [
    {
      variant: "none",
      speed: 30,
      pay: 500,
      speedId:0
    },
    {
      variant: "blue",
      speed: 50,
      pay: 700,
      speedId:1
    },
    {
      variant: "purple",
      speed: 100,
      pay: 900,
      speedId:2
    },
  ];
  return (
    <>
      <h3 className="mb-4">
        {title || "Подключите Интернет + ТВ прямо сейчас"}
      </h3>

      <Row>
        <Col lg="3" className="mb-4">
          <div className="package-about">
            <div className="package-about--head">Пакет</div>
            <div className="package-about--title">Интернет + ТВ</div>
            <div className="package-about--info">
              <div className="package-about--iteminfo">
                WI-FI Роутер <br />
                <div className="package-about--price">1 500 р.</div> {" или "}
                <div className="package-about--price">50 р./мес</div>
              </div>
              <div className="package-about--iteminfo">
                ТВ Приставка <br />
                <div className="package-about--price">3 000 р.</div>
              </div>
            </div>
          </div>
        </Col>
        {packages.map((inf, i) => (
          <Package {...inf} index={i} link="/calculator" onClick={()=>updateCalculator(inf.speedId)} />
        ))}
      </Row>
    </>
  );
};

export default connect(()=>{}, dispatch=>({
  updateCalculator: speed => dispatch(UpdateCalculator(speed))
}))(Packages);