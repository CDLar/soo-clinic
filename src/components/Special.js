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
        <div className='special-wrapper'>
            <header className='special-header teal'>특수클리닉</header>

            <div className='special-grid'>
                <div>
                    <h2>X-Ray 검사</h2>
                    <img
                        src={xrayIcon}
                        alt="X-Ray 검사"
                    />
                </div>
                <div>
                    <h2>초음파검사</h2>
                    <img
                        src={ultrasoundIcon}
                        alt="초음파검사"
                    />
                </div>
                <div>
                    <h2>심전도검사</h2>
                    <img
                        src={heartIcon}
                        alt="심전도검사"
                    />
                </div>
                <div>
                    <h2>종합건강검진</h2>
                    <img
                        src={checkupIcon}
                        alt="종합건강검진"
                    />
                </div>
                <div>
                    <h2>예방접종</h2>
                    <img
                        src={vaccinationIcon}
                        alt="예방접종"
                    />
                </div>
                <div>
                    <h2>귀이경검사</h2>
                    <img
                        src={otoscopeIcon}
                        alt="귀이경검사"
                    />
                </div>
                <div>
                    <h2>수면내시경</h2>
                    <img
                        src={endoscopeIcon}
                        alt="수면내시경"
                    />
                </div>
                <div>
                    <h2>혈액검사</h2>
                    <img
                        src={bloodIcon}
                        alt="혈액검사"
                    />
                </div>
            </div>
        </div>
    )
}