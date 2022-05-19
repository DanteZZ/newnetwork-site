import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import logo from "../../assets/images/logo_footer.png";
import payment from "../../assets/images/payment_footer.png";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import connector from "./connect.js";
import dispatcher from "./dispatch.js";

const Footer = ({updateCalculator}) => {
  const list = [
    {
      title:"Интернет",
      childs: [
        {title:"Подключить интернет", link:"/services"},
        {title:"Подключить интернет + ТВ", link:"/services"},
        {title:"Калькулятор услуг", link:"/calculator"},
        {title:"Политика конфиденциальности", link:"/pages/privacy"},
        {title:"Проверить возможность подключения", link:"/calculator"},
      ]
    },
    {
      title:"Оборудование",
      childs: [
        {title:"WI-FI Роутер", link:"/pages/wifi"},
        {title:"ТВ-приставка", link:"/pages/tv"},
        {title:"Аренда оборудования", link:"/pages/rent"},
      ]
    },
    {
      title:"Тарифы и услуги",
      childs: [
        {title:"Интернет - 30", link:"/calculator", selectSpeed:0},
        {title:"Интернет - 50", link:"/calculator", selectSpeed:1},
        {title:"Интернет - 100", link:"/calculator", selectSpeed:2},
        {title:"Белый IP-адрес", link:"/pages/whiteip"},
      ]
    },
    {
      title:"Клиентам",
      childs: [
        {title:"Тех. поддержка", link:"/help"},
        {title:"Личный кабинет", link:"http://lk.new-network.ru", target:"_blank"},
        {title:"Оплата услуг", link:"/pay", target:""},
        {title:"Контакты", link:"/pages/contacts", target:""},
        {title:"Помощь", link:"/help"},
      ]
    }
  ]
  return (
    <>
      <Container className="mt-5">
        <Row>
          {
            list.map(({title, childs}) => <Col md="3" sm="6" xs="12">
              <h5>{title}</h5>
              <ul class="list-unstyled">
                {childs.map(({link,title,target, selectSpeed})=>
                  <li>
                    {
                    !target 
                      ? (<Link to={link} target={target} onClick={()=>{if (selectSpeed !== null) {updateCalculator(selectSpeed)} }} className="footer-link">{title}</Link>)
                      : (<a href={link} target={target} className="footer-link">{title}</a>)
                    }
                  </li>
                  )}
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
            <Col>
              <img src={payment}/>
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
