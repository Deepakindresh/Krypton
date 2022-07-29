import React from 'react'
import {useStateValue} from '../../../StateProvider';
import "./Products.css"
import FavoriteIcon from '@mui/icons-material/Favorite';

function Products() {

  const [{currProduct}, dispatch] = useStateValue();
  console.log(currProduct);
  return (
    <div className='Container'>
      <div className='Container-left'>
        <img style={{height: '100%'}} src={currProduct.image} alt={currProduct.title} />
      </div>
      <div className='Container-right'>
        <div className='Container-content'>
            <h1 className='Product-title'>{currProduct.title}</h1>
            <div className='Product-desc'>{currProduct.description}</div>
            <div className='Product-amfav'>
              <h1 className='Product-amount'>$ {currProduct.amount}</h1> 
              <FavoriteIcon className='Product-favourite'/>
            </div>
        </div>
        <div className='Container-buttons'>
          <div className='Container-buttons-left'>
            <h2>Buy Now</h2>
          </div>
          <div className='Container-buttons-right'>
            <h2>Add to Basket</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products