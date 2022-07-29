import React, {useState} from 'react'
import "./HomeProduct.css"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useStateValue} from '../../../StateProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function HomeProduct({product}) {
    const [{currProduct}, dispatch] = useStateValue();
    const [addedtocart, setAddedtocart] = useState([]);
    
    let navigate = useNavigate();
  function handleDispatch() {
    dispatch({
      type: "ADD_PRODUCTS",
      currProduct: product
    });
    navigate('/products');
  }

  function handleBasket(){
    //  Add to basket if it is not already added using Context API
    for(let i = 0; i < addedtocart.length; i++){
      if (addedtocart[i].id === product.id){
        return;
      }
    }
    dispatch({
      type: "ADD_TO_BASKET",
      item: product
    });
    setAddedtocart([...addedtocart, product]);
  }

  function handleFav(){
    // Favourite products of users are sent to the server for future use.
    axios.post('http://localhost:5000/favourites', {
      product: product
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    }).finally(() => {
      console.log("This is products ",product);
    }
    );
  }

  return (
    <div className='Home-product' >
            <img className='Product-image' src={product.image} alt={product.name} onClick={handleDispatch}/>
            <div className='Home-product-content'>

            <div className='Home-product-info' >
                <div className='Product-content' onClick={handleDispatch}>
                    <div className='Product-title'>{product.title}</div>
                    <div className='Product-amount'>$ {product.amount}</div>
                    <div className='Product-rating'>{product.rating}</div>
                </div>
              <div className='Product-icons'>
                <FavoriteIcon className='Product-favourite' onClick={handleFav}/>
                <AddShoppingCartIcon className='Product-cart' onClick={handleBasket}/>
              </div>
            </div>
            </div>
    </div>
  )
}

export default HomeProduct