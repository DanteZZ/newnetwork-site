import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import logo from "../../assets/images/logo_footer.png";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import connector from "./connect.js";
import dispatcher from "./dispatch.js";

const Footer = () => {
  const list = [
    {
      title:"Интернет",
      childs: [
        {title:"Подключить интернет", link:"/"},
        {title:"Подключить интернет + ТВ", link:"/"},
        {title:"Калькулятор услуг", link:"/"},
        {title:"Условия договора", link:"/"},
        {title:"Проверить возможность подключения", link:"/"},
      ]
    },
    {
      title:"Оборудование",
      childs: [
        {title:"WI-FI Роутер", link:"/"},
        {title:"ТВ-приставка", link:"/"},
        {title:"Аренда оборудования", link:"/"},
      ]
    },
    {
      title:"Тарифы и услуги",
      childs: [
        {title:"Интернет - 30", link:"/"},
        {title:"Интернет - 50", link:"/"},
        {title:"Интернет - 100", link:"/"},
        {title:"Белый IP-адрес", link:"/"},
      ]
    },
    {
      title:"Клиентам",
      childs: [
        {title:"Тех. поддержка", link:"/"},
        {title:"Личный кабинет", link:"/"},
        {title:"Оплата услуг", link:"/"},
        {title:"Помощь", link:"/"},
      ]
    }
  ]
  return (
    <>
      <Container className="mt-5">
        <Row>
          {
            list.map(({title, childs}) => <Col xs="6">
              <h5>{title}</h5>
              <ul class="list-unstyled">
                {childs.map(({link,title})=><li>
                    <Link to={link} className="footer-link">{title}</Link>
                  </li>)}
              </ul>
            </Col>)
          }
        </Row>
      </Container>
      <Container fluid className="footer-bottom mt-3">
        <Container>
          <Row className="pt-3 pb-3">
            <Col>
              <Link to="/"><img src={logo}/></Link>
            </Col>
            <Col className="text-end">
              © ООО “Новые Сети”, 2022 г.<br/>
              Все права защищены
            </Col>
          </Row>
        </Container>
          
      </Container>
    </>
  );
};
export default connect(connector, dispatcher)(Footer);
