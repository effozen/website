import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, {Component} from "react";
import Slider from "react-slick";

import akihabara from './imgs/akihabara.webp';
import disney from './imgs/disney.webp';
import enoshima from './imgs/enoshima.jpeg';
import incheon from './imgs/incheon.jpeg';
import kansai from './imgs/kansai.webp';
import kuhokusi from './imgs/kuhokusi.jpeg';
import sibuya from './imgs/sibuya.jpeg';
import yamasaki from './imgs/yamasaki.webp';

const Carousel = () => {
  const settings = {
    // className: "slider variable-width",
    dots: false,
    infinite: true,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000
  };

  const carouselData = [
    {
      img: kansai,
      day: '1일차',
      date: '2024년 07월 11일',
      message: '오사카데스카~~!'
    },
    {
      img: yamasaki,
      day: '2일차',
      date: '2024년 07월 12일',
      message: '일본술? 뭐가 그리 대단한데??'
    },
    {
      img: kuhokusi,
      day: '3일차',
      date: '2024년 07월 13일',
      message: '보세보세 역사를 보세!'
    },
    {
      img: akihabara,
      day: '4일차',
      date: '2024년 07월 14일',
      message: '안녕 도쿄!'
    },
    {
      img: sibuya,
      day: '5일차',
      date: '2024년 07월 15일',
      message: '시부야에서 나도 패션왕!'
    },
    {
      img: disney,
      day: '6일차',
      date: '2024년 07월 16일',
      message: '디즈니월드 속으로! 나도 주인공!'
    },
    {
      img:enoshima,
      day: '7일차',
      date: '2024년 07월 17일',
      message: '안선생님.. 농구가 하고 싶어요..!'
    },
    {
      img:incheon,
      day: '8일차',
      date: '2024년 07월 18일',
      message: '굿바이 일본! 헬로우 한국!'
    },
  ];

  return (
    <div className="slider-container bg-white">
      <Slider {...settings}>
        {carouselData.map(v => {
          console.log(v);
          return (
            <div key={`${v.data}_${v.message}`} className="flex flex-col w-80 p-3">
              <img src={v.img} alt="img" className="w-64 h-64 object-cover object-center"/>
              <div className="mt-2 text-xl font-bold text-[#1539CB]">{v.day}</div>
              <div className="mt-1 text-l font-semibold text-gray-500">{v.date}</div>
              <div className="mb-2 text-xl font-bold w-64">{v.message}</div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;