import React from 'react'
import fluIcon from '../images/flu.png'
import diabetesIcon from '../images/diabetes.png'
import lungIcon from '../images/lung.png'
import scaleIcon from '../images/scale.png'
import smokingIcon from '../images/smoking.png'
import laserIcon from '../images/laser.png'
import allergyIcon from '../images/allergy.png'
//import  from '../images/'



export default function Special() {
    return (
        <>
            <div className='card-wrapper'>
                <header className='card-header teal'>일반진료과목</header>
                <div className='card'>
                    <h2>​알레르기검사</h2>
                    <img
                        src={fluIcon}
                        alt="​알레르기검사"
                    />
                </div>
                <div className='card'>
                    <h2>만성질환관리</h2>
                    <img
                        src={diabetesIcon}
                        alt="만성질환관리"
                    />
                </div>
                <div className='card'>
                    <h2>호흡기질환치료</h2>
                    <img
                        src={lungIcon}
                        alt="호흡기질환치료"
                    />
                </div>
                <div className='card'>
                    <h2>비만클리닉</h2>
                    <img
                        src={scaleIcon}
                        alt="비만클리닉"
                    />
                </div>
                <div className='card'>
                    <h2>금연클리닉</h2>
                    <img
                        src={smokingIcon}
                        alt="금연클리닉"
                    />
                </div>
                <div className='card'>
                    <h2>피부레이저</h2>
                    <img
                        src={laserIcon}
                        alt="피부레이저"
                    />
                </div>
                <div className='card'>
                    <h2>대상포진치료</h2>
                    <img
                        src={allergyIcon}
                        alt="대상포진치료"
                    />
                </div>
                <div className='card'>
                    <h2>대체할거?</h2>
                    <img
                        src={bloodIcon}
                        alt="대체할거?"
                    />
                </div>
            </div >
            <div className='detail-box'>
                <div className='icon-box'><img src={fluIcon} alt='​알레르기검사' /></div>
                <div className='descrip-box'>
                    <h1>​알레르기검사</h1>
                    <p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div >
            <div className='detail-box'>
                <div className='descrip-box'>
                    <h1>만성질환관리</h1>
                    <p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className='icon-box'><img src={diabetesIcon} alt="만성질환관리" /></div>
            </div >
            <div className='detail-box'>
                <div className='icon-box'><img src={lungIcon} alt="호흡기질환치료" /></div>
                <div className='descrip-box'>
                    <h1>호흡기질환치료</h1>
                    <p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div >
            <div className='detail-box'>
                <div className='descrip-box'>
                    <h1>비만클리닉</h1>
                    <p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className='icon-box'><img src={scaleIcon} alt="비만클리닉" /></div>
            </div >
            <div className='detail-box'>
                <div className='icon-box'><img src={smokingIcon} alt="금연클리닉" /></div>
                <div className='descrip-box'>
                    <h1>금연클리닉</h1>
                    <p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div >
            <div className='detail-box'>
                <div className='descrip-box'>
                    <h1>피부레이저</h1>
                    <p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className='icon-box'><img src={laserIcon} alt="피부레이저" /></div>
            </div >
            <div className='detail-box'>
                <div className='icon-box'><img src={allergyIcon} alt="대상포진치료" /></div>
                <div className='descrip-box'>
                    <h1>대상포진치료</h1>
                    <p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div >
            <div className='detail-box'>
                <div className='descrip-box'>
                    <h1>대체할거?</h1>
                    <p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className='icon-box'><img src={bloodIcon} alt="대체할거?" /></div>
            </div >
        </>
    )
}