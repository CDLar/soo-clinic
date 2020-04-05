import React from 'react'
import logo from '../images/header.png'

export default function Nav() {
    return (
        <nav className='nav-bar'>
            <img src={logo} alt='수내과' />
            <ul className='row'>
                <li>
                    <button className='nav-btn active teal'>Home</button>
                </li>
                <li>
                    <button className='nav-btn brown'>병원소개</button>
                </li>
                <li>
                    <button className='nav-btn brown'>일반진료</button>
                </li>
                <li>
                    <button className='nav-btn brown'>특수클리닉</button>
                </li>
                <li>
                    <button className='nav-btn brown'>병원방문안내</button>
                </li>
                <li>
                    <button className='nav-btn brown'>갤러리</button>
                </li>
            </ul>
        </nav>
    )
}