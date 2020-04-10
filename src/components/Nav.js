import React from 'react'
import logo from '../images/header.png'
import { FaAlignJustify } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

export default function Nav() {
    //const [activeBtn, setActiveBtn] = React.useState('Home')
    return (
        <nav className='nav-bar'>
            <img className='nav-logo' src={logo} alt='수내과' />
            <ul className='row nav-desktop'>
                <li>
                    <NavLink to='/' exact><button className='nav-btn active teal'>Home</button></NavLink>
                </li>
                <li>
                    <NavLink to='/intro'><button className='nav-btn brown'>병원소개</button></NavLink>
                </li>
                <li>
                    <NavLink to='/services'><button className='nav-btn brown'>일반진료</button></NavLink>
                </li>
                <li>
                    <NavLink to='/special'><button className='nav-btn brown'>특수클리닉</button></NavLink>
                </li>
                <li>
                    <NavLink to='/directions'><button className='nav-btn brown'>방문안내</button></NavLink>
                </li>
                <li>
                    <NavLink to='/gallery'><button className='nav-btn brown'>갤러리</button></NavLink>
                </li>
            </ul>
            <ul className='row nav-mobile'>
                <FaAlignJustify size={25} />
            </ul>
        </nav>
    )
}