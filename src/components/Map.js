import React from 'react'; 
import { mapPic } from '../images/map.png'
export default function Map() {
  return ( 
    <div className='map-wrapper'>
      <div className='info-box'>
        <div><h1 style={{ textAlign: 'center' }}>秀수내과</h1></div>
        <div>
          <h3>진료시간</h3>
          <ul>
            <li>평일 09:30 ~ 19:00</li>
            <li>토요일 09:30 ~ 15:00</li>
            <li>일요일/공휴일 휴무</li>
            <li>점심시간 13:00 ~ 14:00</li>
          </ul>
        </div>
        <div>
          <h3>오시는 길</h3>
          <p>경기도 용인시 기흥구 사은로126번길 25
            ​나곡초등학교 맞은 편 SC 제일은행 건물 2층</p>
        </div>
        <div>
          <h3>상담문의</h3>
          <p>031) 309 - 8275​​</p>
        </div>
      </div>
      <div className='map-box'>
        <img src={mapPic} alt='Clinic Map' />
      </div>
    </div>
  )
}