import React from 'react'
import "./HomeProduct.css"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useStateValue} from '../../../StateProvider';
import { useNavigate } from 'react-router-dom';


function HomeProduct({product}) {
    const [{currProduct}, dispatch] = useStateValue();
    let navigate = useNavigate();
  function handleDispatch() {
    dispatch({
      type: "ADD_PRODUCTS",
      currProduct: product
    });
    navigate('/products');
  }
  return (
    <div className='Home-product' >
            <img className='Product-image' src={product.image} alt={product.name} onClick={handleDispatch}/>
            <div className='Home-product-info' >
                <div className='Product-content' onClick={handleDispatch}>
                    <div className='Product-title'>{product.title}</div>
                    <div className='Product-amount'>$ {product.amount}</div>
                    <div className='Product-rating'>{product.rating}</div>
                </div>
              <div className='Product-icons'>
                <FavoriteIcon className='Product-favourite'/>
                <AddShoppingCartIcon className='Product-cart'/>
              </div>
            </div>
    </div>
  )
}

export default HomeProduct