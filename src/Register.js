import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const Register = () => {

  const [inputs, setInputs] = useState({});

  const handleChange = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);

    axios.post('http://localhost:8888/api/addUser', inputs)
    .then(function(response){
      console.log(response);
    });


  }
 
  return (
    <div>
      <div className='registerCon'>
        <h1>Register Form</h1>
        <form>
            <input name="name" type="text" placeholder='Name & Surname' onChange={handleChange} />
            <input name="email" type="text" placeholder='Your Email' onChange={handleChange}/>
            <input name="contact" type="number" placeholder='Contact' onChange={handleChange}/>
            <input name="username" type="text" placeholder='Username' onChange={handleChange}/>
            <input name="password" type="password" placeholder='Password' onChange={handleChange}/>
            <input type="password" placeholder='Confirm Password' />
            <button type='submit' onClick={handleSubmit}>Register User</button>
        </form>
      </div>
    </div>
  )
}

export default Register
