import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='login-container'>

    <div className="login-topic">
      CREATE ACCOUNT
    </div>

    <div className='input-boxes-signup'>
    <input type='text' name='first_name' placeholder='First Name'/>
      <br/>
      <input type='text' name='last_name' placeholder='Last Name'/>
      <br/>
      <input type='text' name='email' placeholder='Email'/>
      <br/>
      <input type='password' name='password' placeholder='Password'/>
    </div>

    <div className="login-button">
      <button type="submit">Sign Up</button>
    </div>

    <div className='forgot_Password'>
       Already have an Account? <Link to={'/login'}>Sign In</Link>
    </div>

   </div>
  )
}
