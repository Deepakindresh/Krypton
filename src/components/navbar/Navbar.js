import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useStateValue} from '../../StateProvider';


function Navbar() {
    const [{user,basket}, dispatch] = useStateValue();
    
  return (
    <div className='Header'>
        <Link to='/home' className='Link'>
            <div className='Logo' >
                ShopKart.
            </div>
        </Link>

        <div className='Links'>
            <Link to='/home' className='Link'>
                <div className='Links'>
                    Products
                </div>
            </Link>
            <Link to='/' className='Link'>
                <div className='Links'>
                    {user ? 'Logout' : 'Login'}
                </div>
            </Link>
            <Link to='/cart' className='Link'>
                <div className='Links'>
                    <ShoppingCartIcon />
                    <div style={{backgroundColor:'red', borderRadius: '20px', padding: '5px'}}>{basket.length}</div>
                </div>
            </Link>
        </div>




    </div>

  )
}

export default Navbar
















