import React from "react";
import Slider from "react-slick";
import tv from "../../../../assets/images/tv.png";
import { Button } from "react-bootstrap";

const Slide = () => {
  return (
    <div className="slider-item">
      <div className="slide-block">
        <div className="slide-left">
          <img alt="tv" src={tv} />
        </div>
        <div className="slide-right ps-3">
          <div>
            <h2 className="pb-2">
              Бесплатное IP
              <br /> телевидение
            </h2>
            <p>
              Для мобильных устройств,
              <br /> Smart TV и ПК
            </p>
            <Button variant="light" className="slide-more">
              Подключить IPTV
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <Slide />
      <Slide />
    </Slider>
  );
};
