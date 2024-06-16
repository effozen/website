import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, {Component} from "react";
import Slider from "react-slick";

import card from "../../utils/imgs/cardimg.png";
import lim from "../../utils/imgs/lim_img1.jpeg";
import choi from "../../utils/imgs/choi_img1.png";
import army from '../../utils/imgs/army_img1.jpeg';

const Carousel = () => {
  const settings = {
    // className: "slider variable-width",
    dots: false,
    infinite: true,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
  };

  const carouselData = [
    {
      img: choi,
      date: '2024년 07월 11일',
      concept: '출국'
    },
    {
      img: army,
      date: '2024년 07월 12일',
      concept: '오사카 공항'
    },
    {
      img: lim,
      date: '2024년 07월 13일',
      concept: '오사카 공항'
    },
    {
      img: card,
      date: '2024년 07월 14일',
      concept: '오사카 공항'
    },
  ];

  return (
    <div className="slider-container bg-white">
      <Slider {...settings}>
        {carouselData.map(v => {
          console.log(v);
          return (
            <div key={`${v.data}_${v.concept}`} className='flex flex-col w-80 p-3'>
              <img src={v.img} alt="img" className='w-64 h-64 object-cover object-center'/>
              <div className='mt-2 text-l font-semibold text-gray-500'>{v.date}</div>
              <div className='mt-1 mb-2 text-3xl font-bold'>{v.concept}</div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;