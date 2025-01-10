import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <img className="header__logo" alt="amazon logo" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2Famazon-logo-png-free-download-in-2023--952370652432471077%2F&psig=AOvVaw0Msd13jDCuciuGoRXHSj7E&ust=1736560339359000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMi0mMeF6ooDFQAAAAAdAAAAABAE"/>
        <div className="header__search">
            <input className="header__searchInput" type="text" />
        </div>
        <div className="header__nav">

        </div>
        

    </div>
  )
}

export default Header