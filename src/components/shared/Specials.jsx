import React from "react";
import { Button, Col, Row } from "react-bootstrap";

import special_gaming from "../../assets/images/special_gaming.png";
import special_tv from "../../assets/images/special_tv.png";
import special_wifi from "../../assets/images/special_wifi.png";
import special_work from "../../assets/images/special_work.png";

const Special = ({variant,title,image,items, index}) => {
  const isLeft = (index/2 == Math.floor(index/2))
  return (

    <Col lg="6" className="mb-4">
      <div className={"special-item "+variant}>
        <Row style={{backgroundImage:`url(${image})`}} className={isLeft ? "special-image m-0 cursor-pointer left" : "special-image m-0 cursor-pointer right"}>
          {isLeft && <Col/>}
          <Col className={isLeft ? "special-text text-end" : "special-text"}>
            <h4>{title}</h4>
            <ul class="list-unstyled mb-0">
              {items.map((item)=><li>{item}</li>)}
            </ul>
          </Col>
          {!isLeft && <Col/>}
        </Row>
      </div>
    </Col>
  );
};

export const Specials = () => {
  const specials = [
    {
      variant:"gradient-blue",
      title:"Интернет для гейминга",
      image:special_gaming,
      items:[
        "Стабильное соединение",
        "Высокая производительность облачного гейминга",
        "Подходит для стриминга",
        "Белый IP-адрес"
      ]
    },
    {
      variant:"gradient-red",
      title:"Android-TV приставка",
      image:special_tv,
      items:[
        "Android 9.0",
        "Бесплатное IPTV",
        "Магазин приложений",
        "YouTube",
        "Универсальный пульт ДУ"
      ]
    },
    {
      variant:"gradient-black",
      title:"Мощный Wi-Fi роутер",
      image:special_wifi,
      items:[
        "Двухдиапазонный 2.4G/5G",
        "Технологий Multi-user MMO",
        "Яндекс.DNS",
        "WPS"
      ]
    },
    {
      variant:"gradient-green",
      title:"Для работы",
      image:special_work,
      items:[
        "Стабильное соединение",
        "Общение без задержек в Zoom, Discord, Skype",
        "Без ограничения на использование SSH, FTP",
      ]
    }
  ]
  return (
    <>
      <h3 className="mb-4">Специально для вас</h3>
      <Row>
        {specials.map((inf,i)=><Special {...inf} index={i}/>)}
      </Row>
    </>
  );
};
