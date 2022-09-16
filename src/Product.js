import React from 'react'
import Pic from './Images/img3.png'

const Product = () => {
    return (
        <div className='product'>
            <div className='p-header'>
                <h3 className='p-h3'>Go Digital</h3>
                <h1 className='p-h1'>Keep track of product<br />and process orders</h1>
            </div>
            <img src={Pic} alt="" className='p-img' />
            <div className='p-img1'>Emerald investment required for 6 bags of rice</div>
            <div className='p-img2'>You processed 21bags of beans today</div>
            <div className='p-img3'>You have received a payment from mavy ltd</div>
        </div>
    )
}

export default Product