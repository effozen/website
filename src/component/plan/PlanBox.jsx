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
      date: '2024년 08월 11일',
      time: "오전 08시 00분",
      location: "인천 국제 공항",
      details: ["티웨이 항공 08시 00분 비행기", "출국"],
      latitude: 37.458671,
      longitude: 126.441967,
    },
    {
      date: '2024년 08월 11일',
      time: "오전 09시 50분",
      location: "간사이 국제 공항",
      details: ["하루카 특급 탑승", "오후 1시경 우메다 도착"],
      latitude: 34.43204295825874,
      longitude: 135.2366992054736,
    },
    {
      date: '2024년 08월 11일',
      time: "오후 01시 00분",
      location: "하카타 모츠나베 오오야마 우메다",
      details: ["점심 식사", "메뉴는 모츠나베!"],
      latitude: 34.70280714425824,
      longitude: 135.49459236931227,
    },
    {
      date: '2024년 08월 11일',
      time: "오후 02시 00분",
      location: "츠유노텐 신사",
      details: ["요도바시 카메라 먼저 방문", "이후 츠유토네 신사 방문"],
      latitude: 34.699590765690616,
      longitude: 135.50073173121407,
    },
    {
      date: '2024년 08월 11일',
      time: "오후 03시 30분",
      location: "오사카성",
      details: ["오후 5시까지 관광"],
      latitude: 34.68753249066268,
      longitude: 135.5258079997683,
    },
    {
      date: '2024년 08월 11일',
      time: "오후 06시 30분",
      location: "리버크루즈(보트)",
      details: ["오후 6시까지 난바역 이동", "리버크루즈 30분 체험", "글리코상 앞에서 릴스!"],
      latitude: 34.6688692,
      longitude: 135.50130055476106,
    },
    {
      date: '2024년 08월 11일',
      time: "오후 08시 00분",
      location: "쿠시카츠 효탄",
      details: ["저녁식사 후 휴식"],
      latitude: 34.66559648116805,
      longitude: 135.50375250343717,
    },
    {
      date: '2024년 08월 12일',
      time: "오전 09시 30분",
      location: "월계관 사케 박물관",
      details: ["아침일찍 일어나서 박물관으로 출발"],
      latitude: 34.92917998074915,
      longitude: 135.76159324484095,
    },
    {
      date: '2024년 08월 12일',
      time: "오후 12시 30분",
      location: "야마자키 증류소 투어",
      details: ["아침일찍 일어나서 박물관으로 출발"],
      latitude: 34.89261580133876,
      longitude: 135.67446152883596,
    },
  ];

  const contents = [
    {
      date: '2024년 08월 11일',
      message: '오사카데스카~~!'
    },
    {
      date: '2024년 08월 12일',
      message: '일본술? 뭐가 그리 대단한데??'
    },
    {
      date: '2024년 08월 13일',
      message: '보세보세 역사를 보세!'
    },
    {
      date: '2024년 08월 14일',
      message: '안녕 도쿄!'
    },
    {
      date: '2024년 08월 15일',
      message: '시부야에서 나도 패션왕!'
    },
    {
      date: '2024년 08월 16일',
      message: '디즈니월드 속으로! 나도 주인공!'
    },
    {
      date: '2024년 08월 17일',
      message: '안선생님...! 농구가 하고 싶어요...!'
    },
    {
      date: '2024년 08월 18일',
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
                  {scheduleData.map((item, index) => {
                    if (content.date === item.date) {
                      return (<ScheduleItem
                        key={index}
                        time={item.time}
                        location={item.location}
                        details={item.details}
                        latitude={item.latitude}
                        longitude={item.longitude}
                      />);
                    } else return null;
                  })}
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
