import {React, Fragment} from 'react'
import './Header.css'
import {Outlet, Link} from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {useStateValue} from './StateProvider'
import { signOutUser } from '../firebase';

function Header() {
    const [{basket, user}, dispatch]=useStateValue();
    console.log(user)
  return (
    <Fragment>
    <div className='header'>
        <Link to="/">      
        <img className="header__logo" alt="amazon logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
        </Link>
        <div className="header__search">
            <input className="header__searchInput" type="text" />
            <SearchIcon className="header__searchIcon"/>
        </div>
        <div className="header__nav">
            <Link to={!user&&"/login"}>
            <div onClick={signOutUser} className="header__option">
                <span className="header__optionLineOne">{user?'Hello':'Hello Guest'}</span>
                <span className="header__optionLineTwo">{user?'Sign Out': 'Sign In'}</span>
            </div>
            </Link>
            <div className="header__option">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& Orders</span>
            </div>
            <div className="header__option">
                <span className="header__optionLineOne">Your</span>
                <span className="header__optionLineTwo">Prime</span>
            </div>
            <Link to="/checkout">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                </div>
            </Link>
        </div>
    </div>
    <Outlet/>
    </Fragment>
  )
}

export default Header