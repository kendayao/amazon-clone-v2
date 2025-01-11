import React from 'react'
import './Checkout.css'
import Subtotal from "./Subtotal"

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" alt="banner ad" src="https://images-na.ssl-images-amazon.com/images/G/01/gift-certificates/consumer/2020/Holiday/GCLPBanners/holi_GCLP_3rd_EN_1024x90_20200918.jpg"/>
        <h2 className="checkout__title">Your shopping basket</h2>
      </div>
      <div className="checkout__right">
        <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout