import React from 'react'
import p1 from '../images/gallery/gallery1'
import p2 from '../images/gallery/gallery2'
import p3 from '../images/gallery/gallery3'
import p4 from '../images/gallery/gallery4'
import p5 from '../images/gallery/gallery5'
import p6 from '../images/gallery/gallery6'
import p7 from '../images/gallery/gallery7'
import p8 from '../images/gallery/gallery8'
import p9 from '../images/gallery/gallery9'
import p10 from '../images/gallery/gallery10'
import p11 from '../images/gallery/gallery11'
import p12 from '../images/gallery/gallery12'
import p13 from '../images/gallery/gallery13'
import p14 from '../images/gallery/gallery14'

export default function Gallery() {
    return (
        <div className='gallery-wrapper'>
            <ul className='gallery-grid'>
                <li>
                    <img src={p1} alt="p1"/>
                </li>
                <li>
                    <img src={p2} alt="p2"/>
                </li>
                <li>
                    <img src={p3} alt="p3"/>
                </li>
                <li>
                    <img src={p4} alt="p4"/>
                </li>
                <li>
                    <img src={p5} alt="p5"/>
                </li>
                <li>
                    <img src={p6} alt="p6"/>
                </li>
                <li>
                    <img src={p7} alt="p7"/>
                </li>
                <li>
                    <img src={p8} alt="p8"/>
                </li>
                <li>
                    <img src={p9} alt="p9"/>
                </li>
                <li>
                    <img src={p10} alt="p10"/>
                </li>
                <li>
                    <img src={p11} alt="p11"/>
                </li>
                <li>
                    <img src={p12} alt="p12"/>
                </li>
                <li>
                    <img src={p13} alt="p13"/>
                </li>
                <li>
                    <img src={p14} alt="p14"/>
                </li>
            </ul>
        </div>
    )
}
