import { blue } from '@mui/material/colors';
import React, {useState,useEffect} from 'react'
import Navbar from '../../components/navbar/Navbar';
import axios from 'axios';
import "./Login.css"
import {useStateValue} from '../../StateProvider';
import { useNavigate } from 'react-router-dom';



function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [createAcct, setCreateAcct] = useState(false);
    const [{user}, dispatch] = useStateValue();
    let navigate = useNavigate();

    const baseURL = "http://localhost:5000/";
    useEffect(() => {
      if (createAcct){
        axios.get(baseURL).then((response) => {
          let accounts = response.data;
          let accountExist = false;
          for(let i = 0; i < accounts.length; i++){
            if(accounts[i].email === email){
              accountExist = true;
          }
        }
        if(accountExist){
          alert("Account already exists");
          setCreateAcct(false);
        }
        else{
          axios.post(baseURL+'users', {
            email: email,
            password: password
          }).then((response) => {
            alert("Account created");
            setCreateAcct(false);
          }).catch((error) => {
            alert("Error creating account");
            setCreateAcct(false);
          }).finally(() => {
            setEmail("");
            setPassword("");
          }
          );
        }
      });
      }
    }
    , [createAcct]);

    function handleLogin() {
      axios.post(baseURL + 'login', {
        email: email,
        password: password}).then((response) => {
          setIsLoggedIn(true);
          alert("Login successful");
          dispatch({
            type: "SET_USER",
            user: email
          });
          navigate("/home");
        }).catch((error) => {
          dispatch({
            type: "SET_USER",
            user: null
          });
          alert("Login failed");
        })

    }

  return (
    <div className='Login'>
      <Navbar />
      <div className='Container'>
        <form className='Form'>
          <div className='Login-form'>
            <div className='Login-form-title'>
              <h1>Login</h1>
            </div>
            <div className='Login-form-input'>
              <input type='text' placeholder='Email Address' className='Login-form-text' required value = {email} onChange={event => setEmail(event.target.value)}/>
              <input type='password' placeholder='Password' className='Login-form-text' required value = {password} onChange={event => setPassword(event.target.value)}/>
            </div>
            <div className='Login-final'>
              <div className='Login-form-account' onClick={() => 
                setCreateAcct(true)}>
                New user? Create an account
              </div>
              <div className='Login-form-button'>
                <div className='Login-text' onClick={handleLogin}>Login</div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login