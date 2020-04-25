import React from 'react'
import logo from '../images/header.png'
import { FaAlignJustify } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

export default function Nav() {
    const [activeBtn, setActiveBtn] = React.useState('home')

    return (
        <nav className='nav-bar'>
            <NavLink to='/' exact>
                <img className='nav-logo' src={logo} alt='수내과' onClick={() => setActiveBtn('home')} />
            </NavLink>
            <ul className='row nav-desktop'>
                <li>
                    <NavLink to='/' exact>
                        <button
                            onClick={() => setActiveBtn('home')}
                            className={activeBtn === 'home' ? 'nav-btn active teal' : 'nav-btn brown'}
                        >
                            Home
                    </button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/intro'><button
                        onClick={() => setActiveBtn('intro')}
                        className={activeBtn === 'intro' ? 'nav-btn active teal' : 'nav-btn brown'}
                    >
                        병원소개
                    </button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/services'><button
                        onClick={() => setActiveBtn('services')}
                        className={activeBtn === 'services' ? 'nav-btn active teal' : 'nav-btn brown'}
                    >
                        일반진료
                    </button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/special'><button
                        onClick={() => setActiveBtn('special')}
                        className={activeBtn === 'special' ? 'nav-btn active teal' : 'nav-btn brown'}
                    >
                        특수클리닉
                    </button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/map'><button
                        onClick={() => setActiveBtn('map')}
                        className={activeBtn === 'map' ? 'nav-btn active teal' : 'nav-btn brown'}
                    >
                        방문안내
                    </button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/gallery'><button
                        onClick={() => setActiveBtn('gallery')}
                        className={activeBtn === 'gallery' ? 'nav-btn active teal' : 'nav-btn brown'}
                    >
                        갤러리
                    </button>
                    </NavLink>
                </li>
            </ul>
            <ul className='row nav-mobile'>
                <FaAlignJustify size={25} />
            </ul>
        </nav>
    )
}