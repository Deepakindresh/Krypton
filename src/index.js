import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './routes/product/home/App';
import { StateProvider } from "./StateProvider";
import reducer, {initialState} from "./reducer";
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './routes/login/Login';
import Products from './routes/product/productpages/Products';
import Cart from './routes/product/productpages/Cart';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StateProvider initialState={initialState} reducer={reducer}>
      <Routes>
        
        <Route path="/" element={
        <App />
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      </StateProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
