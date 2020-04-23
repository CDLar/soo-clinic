import React from 'react';
import {mapPic} from '../images/map.png'
export default function Map() {
  return (
    <div className='map-wrapper'>
      <div className='info-box'>
        <div><h1 style={{textAlign:'center'}}>秀수내과</h1></div>
        <div>22</div>
        <div>33</div>
        <div>44</div>
      </div>
      <div className='map-box'>
        <img src={mapPic} alt='Clinic Map'/>
      </div>
    </div>
  )
}