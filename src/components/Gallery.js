import React from 'react'
import p1 from '../images/gallery/gallery1.jpg'
import p2 from '../images/gallery/gallery2.jpg'
import p3 from '../images/gallery/gallery3.jpg'
import p4 from '../images/gallery/gallery4.jpg'
import p5 from '../images/gallery/gallery5.jpg'
import p6 from '../images/gallery/gallery6.jpg'
import p7 from '../images/gallery/gallery7.jpg'
import p8 from '../images/gallery/gallery8.jpg'
import p9 from '../images/gallery/gallery9.jpg'
import p10 from '../images/gallery/gallery10.jpg'
import p11 from '../images/gallery/gallery11.jpg'
import p12 from '../images/gallery/gallery12.jpg'
import p13 from '../images/gallery/gallery13.jpg'
import p14 from '../images/gallery/gallery14.jpg'
import p15 from '../images/gallery/gallery15.jpg'

export default function Gallery() {
    return (
        <div className='gallery-wrapper'>
            <ul className='gallery-grid'>
                <li className='img-1'>
                    <img src={p1} alt="p1" />
                </li>
                <li className='img-2'>
                    <img src={p2} alt="p2" />
                </li>
                <li className='img-3'>
                    <img src={p3} alt="p3" />
                </li>
                <li className='img-4'>
                    <img src={p4} alt="p4" />
                </li>
                <li className='img-5'>
                    <img src={p5} alt="p5" />
                </li>
                <li className='img-6'>
                    <img src={p6} alt="p6" />
                </li>
                <li className='img-7'>
                    <img src={p7} alt="p7" />
                </li>
                <li className='img-8'>
                    <img src={p8} alt="p8" />
                </li>
                <li className='img-9'>
                    <img src={p9} alt="p9" />
                </li>
                <li className='img-10'>
                    <img src={p10} alt="p10" />
                </li>
                <li className='img-11'>
                    <img src={p11} alt="p11" />
                </li>
                <li className='img-12'>
                    <img src={p12} alt="p12" />
                </li>
                <li className='img-13'>
                    <img src={p13} alt="p13" />
                </li>
                <li className='img-14'>
                    <img src={p14} alt="p14" />
                </li>
                <li className='img-15'>
                    <img src={p15} alt="p15" />
                </li>
            </ul>
        </div>
    )
}
