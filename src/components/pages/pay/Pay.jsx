import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Alert, Spinner } from "react-bootstrap";

import { connect } from "react-redux";
import connector from "./connect.js";
import dispatcher from "./dispatch.js";

import payment_logo from "../../../assets/images/payment.png";

import { help_phone } from "../../../configs/data.js";

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
              <Row>
                <Col className="mt-4 mb-5">
                    <center>
                      <img src={payment_logo}/>
                    </center>
                    <h2 className="h5 mt-4">Способы оплаты</h2>

                    <strong>Банковской картой</strong>
                    <p>
                      Для выбора оплаты товара с помощью банковской карты на соответствующей странице необходимо нажать кнопку Оплата заказа банковской картой. Оплата происходит через ПАО СБЕРБАНК с использованием банковских карт следующих платёжных систем:
                    </p>
                    <ul>
                      <li>МИР (разместить логотип МИР);</li>
                      <li>VISA International (разместить логотип VISA International);</li>
                      <li>Mastercard Worldwide (разместить логотип Mastercard Worldwide);</li>
                      <li>JCB (разместить логотип JCB).</li>
                    </ul>
                    <p>
                      Для оплаты (ввода реквизитов Вашей карты) Вы будете перенаправлены на платёжный шлюз ПАО СБЕРБАНК. Соединение с платёжным шлюзом и передача информации осуществляется в защищённом режиме с использованием протокола шифрования SSL. В случае если Ваш банк поддерживает технологию безопасного проведения интернет-платежей Verified By Visa, MasterCard SecureCode, MIR Accept, J-Secure, для проведения платежа также может потребоваться ввод специального пароля.
                    </p>
                    <p>
                      Настоящий сайт поддерживает 256-битное шифрование. Конфиденциальность сообщаемой персональной информации обеспечивается ПАО СБЕРБАНК. Введённая информация не будет предоставлена третьим лицам за исключением случаев, предусмотренных законодательством РФ. Проведение платежей по банковским картам осуществляется в строгом соответствии с требованиями платёжных систем МИР, Visa Int., MasterCard Europe Sprl, JCB.
                    </p>
                    <h2 className="h5 mt-4">Возникновение ошибок при оплате</h2>
                    <p>
                      При возникновении ошибок при оплате, просьба связаться с нами по телефону горячей линии: <a href={`tel:${help_phone}`}>{help_phone}</a>
                    </p>
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
