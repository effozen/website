import React, {useRef, useEffect, useState} from 'react';
import {Status, Wrapper} from "@googlemaps/react-wrapper";
import {apiKey} from "../../secret/apiKey";
import GoogleMap from "./GoogleMap";

const render = (status, latitude, longitude) => {
  switch (status) {
    case Status.LOADING:
      return <>로딩중...</>;
    case Status.FAILURE:
      return <>에러 발생</>;
    case Status.SUCCESS:
      return <GoogleMap latitude={latitude} longitude={longitude}/>;
  }
};

const ScheduleItem = ({latitude, longitude, time, location, details}) => {
  return (
    <div className="my-8 flex schedule-item">
      <div className="w-[440px] h-52 border-black border-2">
        <Wrapper apiKey={apiKey.googleMapAPIKey} render={(status) => render(status, latitude, longitude)}/>
      </div>
      <div className="ml-16">
        <div className="text-2xl font-bold text-gray-500">
          {time}
        </div>
        <div className="text-4xl font-extrabold">
          {location}
        </div>
        <ul className="text-xl font-semibold list-disc ml-5 mt-4">
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const PlanBox = () => {
  const scheduleData = [
    {
      time: "오전 07시 30분",
      location: "인천 국제 공항",
      details: ["제주항공 09시 30분 비행기", "출국"],
      latitude: 37.458224,
      longitude: 126.442818,
    },
    {
      time: "오전 11시 30분",
      location: "하네다 공항",
      details: ["11시 30분 하네다 공항 도착", "13시 00분 도쿄행 열차 탑승"]
    },
    // ... 동일한 형식의 일정 데이터 추가
  ];

  const contents = [
    {
      date: '2024년 07월 11일',
      message: '오사카데스카~~!'
    },
    {
      date: '2024년 07월 12일',
      message: '일본술? 뭐가 그리 대단한데??'
    },
    {
      date: '2024년 07월 13일',
      message: '보세보세 역사를 보세!'
    },
    {
      date: '2024년 07월 14일',
      message: '안녕 도쿄!'
    },
    {
      date: '2024년 07월 15일',
      message: '시부야에서 나도 패션왕!'
    },
    {
      date: '2024년 07월 16일',
      message: '디즈니월드 속으로! 나도 주인공!'
    },
    {
      date: '2024년 07월 17일',
      message: '안선생님...! 농구가 하고 싶어요...!'
    },
    {
      date: '2024년 07월 18일',
      message: '굿바이 일본! 헬로우 한국!'
    },
  ];

  return (
    <div className="bg-white max-w-7xl mx-auto flex flex-col py-9 space-y-32">
      <div className="flex">
        {/* 라인 */}
        <div className="flex flex-col items-center mx-10 mt-2.5">
          <div className="line w-full ml-3"></div>
          <div className="circle"></div>
        </div>

        {/* 콘텐츠 */}
        <div>
        {contents.map((content, dateIndex) => (
          <div className="flex">
            <div className="circle -ml-[52px] mt-[10px] mr-10"></div>
            <div>
              <div key={dateIndex} className=" w-full flex flex-col mb-28">
                <div className="text-gray-500 text-3xl font-semibold">{content.date}</div>
                <div className="text-5xl font-extrabold mt-2">{content.message}</div>
                {scheduleData.map((item, index) => (
                  <ScheduleItem
                    key={index}
                    time={item.time}
                    location={item.location}
                    details={item.details}
                    latitude={item.latitude}
                    longitude={item.longitude}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default PlanBox;
