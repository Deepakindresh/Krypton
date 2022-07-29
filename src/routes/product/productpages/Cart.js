import React, {useState,useEffect} from 'react'
import Navbar from '../../../components/navbar/Navbar';
import "./Cart.css"
import {useStateValue} from '../../../StateProvider';
import CloseIcon from '@mui/icons-material/Close';
import zIndex from '@mui/material/styles/zIndex';
import axios from 'axios';

function Cart() {
  const [{basket, user}, dispatch] = useStateValue();
  const [toDelete, setToDelete] = useState(null);
  const [amount,setAmount] = useState(0);
  const [popup, setPopup] = useState(false);
  console.log("this is basket ",basket);

  useEffect(() => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: toDelete
    });
  }, [toDelete]);


  useEffect(() => {
    let total = 0;
    basket.map((item) => {
      total += parseInt(item.amount);
    }
    );
    setAmount(total);
  }, [basket])

  function handleSubmit(){
    setPopup(true);
    axios.post('http://localhost:5000/orders', {basket}) // Posting to the database and server
  }


  return (
    <div>
      <Navbar/>
      {user ? 
      <div  className='Cart'>
      <div className='Cart-container'>
        <div className='Card1'>
          <h2 style={{margin: '1rem'}}>My Cart</h2>
          {basket.map((item) => (
            <div className='Card2'>
              <img src={item.image} alt={item.title} style={{height: '8rem'}}/>
              <div className='CardContent'>
                <h3>{item.title}</h3>
                <br/>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                  <p>
                    $ {item.amount}
                  </p>
                  <CloseIcon className='CloseIcon' onClick = {() => setToDelete(item.id)}/>
                </div>
              </div>
            </div>
              ))}
        </div>
        <div className='CardPayment-button' onClick={handleSubmit}>
          <div>Place Order</div>
        </div>
        {popup ? <div className='Popup' onClick={() => setPopup(false)}>
            <img src = {'https://cdn.discordapp.com/attachments/928547119646781500/1002682795430248578/unknown.png'} className="Popup"></img>
        </div> : null}
      </div>
      <div className='CardPayment'> 
        <div className='CardPayment-content'>
          <h2>Price Details</h2>
          <div className='CardPayment-price'>
            <div>Price</div>
            <div>{amount}</div>
          </div>
          <div className='CardPayment-price'>
            <div>Discount Price</div>
            <div>{100}</div>
          </div>
          <div className='CardPayment-price' style={{borderBottom:'gray 2px solid', paddingBottom: '20px', marginBottom: '3rem'}}>
            <div>Delivery Charge</div>
            <div>{50}</div>
          </div>
          <div className='CardPayment-price'>
            <h2>Total</h2>
            <h2>{amount - 50 < 0 ? 0: amount - 50}</h2>
          </div>
        </div>
      </div>

      
      </div>: <h1>Please Login</h1>}
    </div>
  )
}

export default Cart