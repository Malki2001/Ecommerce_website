import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='login-container'>
    <div className="login-topic">
      LOGIN
    </div>
    <div className='input-boxes'>
      <input type='text' name='email' placeholder='Email'/>
      <br/>
      <input type='password' name='password' placeholder='Password'/>
    </div>
    <div className="login-button">
      <button type="submit">Sign In</button>
    </div>

    <div className='forgot_Password'>
       <a href='' >Forgot Password ?</a>
    </div>

    <div className='forgot_Password'>
       Do not have an Account? <Link to={'/signup'}>Create An Account</Link>
    </div>

   
  </div>
  )
}
