import React from 'react'
import logo from '../../assets/logo.png';
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <nav className='headerNav'>
            <img src={logo} alt='logo' className='LogoImg' />
            <span>
                <button className='navButton'>SHOP</button>
                <button className='navButton'>MENU</button>
                <button className='navButton'>LOCATIONS</button>
            </span>
            <span>
                <button className='navButton'>
                    <SearchIcon />
                </button>
                <button className='navButton'>
                    <PersonIcon />
                </button>
                <button className='buttonCart'>
                    <ShoppingCartIcon /><b>Cart</b>
                </button>
            </span>
        </nav></div>
    )
}

export default Nav