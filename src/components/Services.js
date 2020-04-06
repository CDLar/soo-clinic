import React from 'react'
import xrayIcon from '../images/xray-icon.png'
import ultrasoundIcon from '../images/ultrasound-icon.png'
import heartIcon from '../images/heart-icon.png'
import checkupIcon from '../images/checkup-icon.png'
import vaccinationIcon from '../images/vaccination-icon.png'
import otoscopeIcon from '../images/otoscope-icon.png'
import endoscopeIcon from '../images/endoscope-icon.png'
import bloodIcon from '../images/blood-icon.png'



export default function Special() {
    return (
        <div className='services-wrapper'>
            <ul className='space-around grid' id='service-grid'>
                <li>
                    <img className='serv-img'
                        src={xrayIcon}
                        alt="X-Ray 검사"
                    />
                </li>
                <li>
                    <img
                        src={ultrasoundIcon}
                        alt="초음파검사"
                    />
                </li>
                <li>
                    <img
                        src={heartIcon}
                        alt="심전도검사"
                    />
                </li>
                <li>
                    <img
                        src={checkupIcon}
                        alt="종합건강검진"
                    />
                </li>
                <li>
                    <img
                        src={vaccinationIcon}
                        alt="예방접종"
                    />
                </li>
                <li>
                    <img
                        src={otoscopeIcon}
                        alt="귀이경검사"
                    />
                </li>
                <li>
                    <img
                        src={endoscopeIcon}
                        alt="수면내시경"
                    />
                </li>
                <li>
                    <img
                        src={bloodIcon}
                        alt="혈액검사"
                    />
                </li>
            </ul>
        </div>
    )
}