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
                    <h2>혈액종합검사</h2>
                    <img
                        src={checkupIcon}
                        alt="혈액종합검사"
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
                    <p><strong>흉부 X선 촬영</strong>은 폐와 심장 계통의 질환에 대해 많은 것을 알려 주는 중요한 검사입니다. X선 촬영을 통해 폐렴, 폐결핵, 폐암, 폐쇄성 폐질환, 미만성 간질성 폐질환, 늑막염, 흉부 외상, 감염 등의 흉부 질환을 알 수 있습니다. X선 촬영 시 폐 부위, 심장, 종격동, 횡격막 및 쇄골, 늑골, 흉추 등의 이상을 검사합니다. X선에 노출되는 검사이기 때문에 임산부나 임신 가능성이 있는 환자는 미리 담당의 또는 방사선사와 의논하고, 검사가 꼭 필요한 경우 자궁 부위를 납 치마나 X선 보호대를 착용하고 촬영하여 X선 노출을 최소화하는 것이 좋습니다.</p>
                </div>
            </div >
            <div id='ultrasound' className='detail-box'>
                <div className='descrip-box'>
                    <h1>초음파검사</h1>
                    <p><strong>복부초음파</strong>는 복부의 주요 고형장기 즉, 간, 췌장, 비장, 신장과 액체인 담즙이 차 있는 쓸개를 검사할 때 우선적으로, 그리고 흔히 사용하는 수단입니다. 우리나라에서는 건강한 일반인에서의 검진 목적으로 사용되기도 하고, 이외에 주로 만성 간염 환자에서 간 경변으로의 이행여부와 간암의 발생을 보기 위해 복부초음파를 이용하여 질병의 경과를 추적 관찰합니다. 또한 각종 암 환자에서 간으로 전이되었는지 검사하기 위한 목적으로도 시행합니다.</p>
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
                    <h1>혈액종합검사</h1>
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