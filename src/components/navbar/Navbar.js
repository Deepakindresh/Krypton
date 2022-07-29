import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar() {
  return (
    <div className='Header'>
        <Link to='/' className='Link'>
            <div className='Logo' >
                ShopKart.
            </div>
        </Link>

        <div className='Links'>
            <Link to='/products' className='Link'>
                <div className='Links'>
                    Products
                </div>
            </Link>
            <Link to='/login' className='Link'>
                <div className='Links'>
                    Login
                </div>
            </Link>
            <Link to='/cart' className='Link'>
                <div className='Links'>
                    <ShoppingCartIcon />
                </div>
            </Link>
        </div>




    </div>

  )
}

export default Navbar
















