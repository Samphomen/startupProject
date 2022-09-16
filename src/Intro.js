import React from 'react'
import Img1 from './Images/img1.jpg'
import Img2 from './Images/img2.png'

const Intro = () => {
    return (
        <div className='Underlay'>
            <img src={Img1} className="i-img" alt="" />
            <nav className='nav'>
                <div className='nav-center'>
                    <div className='nav-header'>
                        <img src={Img2} />
                    </div>
                    <ul className='nav-links'>
                        <li>
                            <button className='link-btn'>Farmer</button>
                        </li>
                        <li>
                            <button className='link-btn'>Factories</button>
                        </li>
                        <li>
                            <button className='link-btn'>Technology</button>
                        </li>
                        <li>
                            <button className='link-btn'>SDG</button>
                        </li>
                        <li>
                            <button className='link-btn'>Company</button>
                        </li>
                    </ul>
                    <button className='nav-btn'>Call For A Demo</button>
                </div>
            </nav>
            <div className='hero'>
                <div className='hero-info'>
                    <h1>Earn Empower Income Farmers</h1>
                    <p>With alone, our farmers have the ability to improve their monthly income by 3x. Alone does this by enabling them to spend their time on the most profitable aspects of palm production & financing increased to local processing capacity.</p>
                </div>
            </div>
        </div>
    )
}

export default Intro