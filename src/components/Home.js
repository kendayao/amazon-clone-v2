import React from 'react'
import './Home.css'
import Product from"./Product"

function Home() {
  return (
    <div className="home">
        <div className="home__container">
            <img className="home__image" alt="amazon banner ad" src="https://m.media-amazon.com/images/I/81mXStzsdmL._SX3000_.jpg" />
            <div className="home__row">
                <Product/>
            </div>
        </div>
    </div>
  )
}

export default Home