import React from 'react'
import './Checkout.css'

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" alt="banner ad" src="https://images-na.ssl-images-amazon.com/images/G/01/gift-certificates/consumer/2020/Holiday/GCLPBanners/holi_GCLP_3rd_EN_1024x90_20200918.jpg"/>
        <h2 className="checkout__title">Your shopping basket</h2>
      </div>
      <div className="checkout__right">
        <h2>The subtotal will go here</h2>
      </div>
    </div>
  )
}

export default Checkout