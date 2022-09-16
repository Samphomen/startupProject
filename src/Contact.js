import React from 'react'
import Img6 from './Images/img6.png'
import { GoLocation } from 'react-icons/go'
import { HiPhone } from 'react-icons/hi'
import { AiOutlineMail } from 'react-icons/ai'

const Contact = () => {
    return (
        <div className='c'>
            <div className='c-wrapper'>
                <div className='c-desc'>
                    <img src={Img6} className='c-img' />
                    <p className='c-p1'>Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident.</p>
                    <div className='c-links'>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className='c-contacts'>
                    <h1 className='c-ctitle'>Quick Links</h1>
                    <ul className='c-links1'>
                        <li className='c-links-btn'>Get Involved</li>
                        <li className='c-links-btn'>Donate Now</li>
                        <li className='c-links-btn'>Become a Volunteer</li>
                        <li className='c-links-btn'>Careers</li>
                        <li className='c-links-btn'>Site</li>
                    </ul>
                </div>
                <div className='c-contacts'>
                    <h1 className='c-ctitle'>Office Links</h1>
                    <ul className='c-links1'>
                        <li className='c-links-btn'>USA Office</li>
                        <li className='c-links-btn'>Australia Office</li>
                        <li className='c-links-btn'>Canada Office</li>
                        <li className='c-links-btn'>Networks</li>
                        <li className='c-links-btn'>North America</li>
                    </ul>
                </div>
                <div className='c-contacts'>
                    <h1 className='c-ctitle'>
                        Contact Us
                    </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img
                                src={GoLocation}
                                alt=""
                                className="c-icon"
                            />
                            Elliott Ave, Parkville VIC 3052, Melbourne Canada
                        </div>
                        <div className="c-info-item">
                            <img
                                src={HiPhone}
                                alt=""
                                className="c-icon"
                            />
                            Phone: +2348053708531
                        </div>
                        <div className="c-info-item">
                            <img
                                src={AiOutlineMail}
                                alt=""
                                className="c-icon"
                            />
                            Email: gantechloy@gmail.com
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact