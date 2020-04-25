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
        <>
            <div className='card-wrapper'>
                <header className='card-header teal'>일반진료과목</header>
                <div className='card'>
                    <a href='#xray'>
                        <h2>X-Ray 검사</h2>
                        <img
                            src={xrayIcon}
                            alt="X-Ray 검사"
                        />
                    </a>
                </div>
                <div className='card'>
                <a href='#ultrasound'>
                    <h2>초음파검사</h2>
                    <img
                        src={ultrasoundIcon}
                        alt="초음파검사"
                    />
                    </a>
                </div>
                <div className='card'>
                <a href='#heart'>
                    <h2>심전도검사</h2>
                    <img
                        src={heartIcon}
                        alt="심전도검사"
                    />
                    </a>
                </div>
                <div className='card'>
                <a href='#checkup'>
                    <h2>종합건강검진</h2>
                    <img
                        src={checkupIcon}
                        alt="종합건강검진"
                    />
                    </a>
                </div>
                <div className='card'>
                <a href='#vaccination'>
                    <h2>예방접종</h2>
                    <img
                        src={vaccinationIcon}
                        alt="예방접종"
                    />
                    </a>
                </div>
                <div className='card'>
                <a href='#otoscope'>
                    <h2>귀이경검사</h2>
                    <img
                        src={otoscopeIcon}
                        alt="귀이경검사"
                    />
                    </a>
                </div>
                <div className='card'>
                <a href='#endoscope'>
                    <h2>수면내시경</h2>
                    <img
                        src={endoscopeIcon}
                        alt="수면내시경"
                    />
                    </a>
                </div>
                <div className='card'>
                <a href='#blood'>
                    <h2>혈액검사</h2>
                    <img
                        src={bloodIcon}
                        alt="혈액검사"
                    />
                    </a>
                </div>
            </div >
            <div id='xray' className='detail-box'>
                <div className='icon-box'><img src={xrayIcon} alt='xray icon' /></div>
                <div className='descrip-box'>
                    <h1>X-Ray 검사</h1>
                    <p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div >
            <div id='ultrasound' className='detail-box'>
                <div className='descrip-box'>
                    <h1>초음파검사</h1>
                    <p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className='icon-box'><img src={ultrasoundIcon} alt="초음파검사" /></div>
            </div >
            <div id='heart' className='detail-box'>
                <div className='icon-box'><img src={heartIcon} alt="심전도검사" /></div>
                <div className='descrip-box'>
                    <h1>심전도검사</h1>
                    <p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div >
            <div id='checkup' className='detail-box'>
                <div className='descrip-box'>
                    <h1>종합건강검진</h1>
                    <p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className='icon-box'><img src={checkupIcon} alt="종합건강검진" /></div>
            </div >
            <div id='vaccination' className='detail-box'>
                <div className='icon-box'><img src={vaccinationIcon} alt="예방접종" /></div>
                <div className='descrip-box'>
                    <h1>예방접종</h1>
                    <p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div >
            <div id='otoscope' className='detail-box'>
                <div className='descrip-box'>
                    <h1>귀이경검사</h1>
                    <p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className='icon-box'><img src={otoscopeIcon} alt="귀이경검사" /></div>
            </div >
            <div id='endoscope' className='detail-box'>
                <div className='icon-box'><img src={endoscopeIcon} alt="수면내시경" /></div>
                <div className='descrip-box'>
                    <h1>수면내시경</h1>
                    <p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div >
            <div id='blood' className='detail-box'>
                <div className='descrip-box'>
                    <h1>혈액검사</h1>
                    <p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className='icon-box'><img src={bloodIcon} alt="혈액검사" /></div>
            </div >
        </>
    )
}