import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import SignUp from './Signup';

//login 
const Login = () => {
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const [error, setError] = useState("")

  useEffect(() => {
    const savedEmail = localStorage.getItem("Email");
    const savedPassword = localStorage.getItem("password");
    if (savedEmail){
      setEmail(savedEmail)
    }
    if (savedPassword){
      setPassword(savedPassword)
    }
  }, [])

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("Email", email)
    localStorage.setItem("password", password)
  }
  // const handleInputChange = (e) => {
  //   const {name, value } = e.target;
  //   if (name === 'email'){
  //     setEmail(value)
  //   }
  //   if (name === 'password'){
  //     setPassword(value)
  //   }
  // }

  const handleLogIn = () => {
    axios
      .post('http://127.0.0.1:6942/login', {
        email,
        password,
      })
      .then((response) => {
        const token = response.data.token;
        alert('Logged in successfully');
        localStorage.setItem('token', token);
      })
      .catch((error) => {
        console.error(' error:', error);
        setError('Failed. Please check your credentials.');
      });

    }
  return (
    <div className='relative flex flex-col justify-center min-h-screen overflow-hidden'>
      <div className='w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-blue-400/60 ring-2 ring-gray-500 lg:max-w-xl'>
        <span className='mb-2 text-3xl'>SCHOLAR STUDENT MS</span>
        <h1 className='text-3xl font-semibold text-center text-black'>Log back in</h1>
        <form 
        className='mt-6' 
        onSubmit={handleSubmit}>
          <div className='mb-2'>
            <label
            htmlFor="Email"
            className='block font-semibold text-black text-s'
            >
              Email
              <input 
              type='text'
              name='Email'
              className='block w-full px-4 py-2 mt-2 text-black bg-white border border-blue-400 rounded-md focus:ring-blue-400 focus:ring-gray-700 focus:outline-none focus:ring focus:ring-opacity-40'
              placeholder='Enter your Email'
              value={email}
              onChange={handleEmailChange}
              required
              />
            </label>
          </div>
          <div className='mb-2'>
            <label
            htmlFor='password'
            className='block text-sm font-semibold text-black'
            >
              Password
            </label>
            <input 
            type='password'
            name='password'
            placeholder='Enter your password'
            className='block w-full px-4 py-2 mt-2 text-black bg-white border border-blue-400 rounded-md focus:ring-blue-400 focus:ring-gray-700 focus:outline-none focus:ring focus:ring-opacity-40'
            value={setPassword}
            onChange={handlePasswordChange}
            required
            />
          </div>
          <p className='text-1xl black text- hover:text-black'>Forgotten password?
            < Link to={'#'} className='font-medium text-blue-400 cursor-pointer hover:underline hover:text-black text-decoration-none' > Click here </Link>
          </p>
          <div className=''>
            <button className='w-full px-4 py-2 tracking-wide text-white bg-blue-400 border cursor-pointer transit hover:-black hover:bg-white hover:text-blue-400 hover:border-black' type='submit' onClick={handleLogIn}>Log in</button>
          </div>
          {error && <p className='text-blue-400'>{error}</p>}
        </form>
        <p className='mt-8 text-xs font-light text-center text-black'>
          {""}
          Don't have an account?
          <a href='/' className='font-medium text-blue-400 cursor-pointer hover:underline hover:text-black'> Sign up!</a></p>
          <p className='text-xs'>
            {""}
            Are you an admin?
            <a href='./admin' className='text-xs font-medium text-blue-400 cursor-pointer hover:underline hover:text-black'> Log in!</a>
          </p>
      </div>
    </div>
  )
}

export default Login