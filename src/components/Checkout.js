import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from "./Subtotal"
import {useStateValue} from './StateProvider'

function Checkout() {
  const [{basket}, dispatch]=useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" alt="banner ad" src="https://images-na.ssl-images-amazon.com/images/G/01/gift-certificates/consumer/2020/Holiday/GCLPBanners/holi_GCLP_3rd_EN_1024x90_20200918.jpg"/>
        <h2 className="checkout__title">Your shopping basket</h2>
        {basket.map(item=>(
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="checkout__right">
        <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout