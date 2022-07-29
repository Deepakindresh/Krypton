
import Navbar from '../../../components/navbar/Navbar';
import "./App.css";

import {useStateValue} from '../../../StateProvider';
import axios from 'axios';
import {useState, useEffect} from 'react';
import HomeProduct from './HomeProduct';


function App() {

  const [{productsState}, dispatch] = useStateValue();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/products').then((response) => {
      setProducts(response.data);
      dispatch({
        type: "ADD_PRODUCTS",
        productsState: response.data
      })
    }).catch((error) => {
      console.log(error);
    }).finally(() => {
      console.log("This is products ",products);
    }
    );
  }, []);

  return (
    <div className='Home'>
      <Navbar />
      <div className='Home-products'>
        {products.map((product) => (
          <HomeProduct product = {product}/>
          ))}


      </div>
    </div>
  );
}

export default App;















