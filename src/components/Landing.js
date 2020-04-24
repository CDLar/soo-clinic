import React from 'react'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { FiPhoneCall, FiMapPin } from 'react-icons/fi'
import { GiHealthNormal } from 'react-icons/gi'

export default function Landing() {
    return (
            <div className='landing-wrapper'>
                <div className='landing-grid'>
                    <div className='main-panel'></div>
                    <div className='panel1'>
                        <span>
                            <FaRegCalendarAlt size={50} />
                            <a className='noselect'>
                                Appointments
                    </a>
                        </span>
                    </div>
                    <div className='panel2'>
                        <span>
                            <GiHealthNormal size={50} />
                            <a className='noselect'>
                                Doctor Info
                    </a>
                        </span>
                    </div>
                    <div className='panel3'>
                        <span>
                            <FiPhoneCall size={50} />
                            <a className='noselect'>
                                Contact Information
                    </a>
                        </span>
                    </div>
                    <div className='panel4'>
                        <span>
                            <FiMapPin size={50} />
                            <a className='noselect'>
                                Directions
                    </a>
                        </span>
                    </div>
                </div >
            </div >
    )
} 