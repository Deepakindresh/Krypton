import React, {useState} from 'react'
import {useStateValue} from '../../../StateProvider';
import "./Products.css"
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useNavigate} from 'react-router-dom';
import Navbar from '../../../components/navbar/Navbar';

function Products() {
  let navigate = useNavigate();
  const [{currProduct,user}, dispatch] = useStateValue();
  console.log(currProduct);
  const [addedtocart, setAddedtocart] = useState([]);

  function handleBasket(){
    for(let i = 0; i < addedtocart.length; i++){
      if (addedtocart[i].id === currProduct.id){
        return;
      }
    }
    dispatch({
      type: "ADD_TO_BASKET",
      item: currProduct
    });
    setAddedtocart([...addedtocart, currProduct]);
  }

  function handleBuy(){
    handleBasket();
    navigate('/cart');
  }

  return (<>
      {user ? 
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
            <div className='Container-buttons-left' onClick={handleBuy}>
              <h2>Buy Now</h2>
            </div>
            <div className='Container-buttons-right' onClick={handleBasket}>
              <h2 style={{color: 'white'}}>Add to Basket</h2>
            </div>
          </div>
        </div> 
      </div>: <>
      <Navbar/>
      <h1 >Please Login</h1></>}
    </>
  )
}

export default Products