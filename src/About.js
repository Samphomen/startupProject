import React from 'react'
import Img5 from './Images/img5.jpg'
import Img4 from './Images/img4.jpg'

const About = () => {
    return (
        <div className='about'>
            <div className='a'>
                <div className="a-left">
                    <div className="a-card bg"></div>
                    <div className="a-card">
                        <img
                            src={Img5}
                            alt=''
                            className='a-img'
                        />
                    </div>
                </div>
                <div className='a-right'>
                    <h2 className='a-title'>SAVE TIME</h2>
                    <h1 className='a-sub'>
                        Reduce Time Spent On Manual<br />Deshelling And Separation
                    </h1>
                    <p className='a-desc'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                </div>
            </div>
            <div className='b'>
                <div className='b-left'>
                    <h3 className='b-title'>Empower Mechanization</h3>
                    <h1 className='b-sub'>
                        Increased Access To<br />Mechanized Tools
                    </h1>
                    <p className='b-desc'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                </div>
                <div className='b-right'>
                    <div className="b-card bg"></div>
                    <div className="b-card">
                        <img
                            src={Img4}
                            alt=''
                            className='b-img'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About