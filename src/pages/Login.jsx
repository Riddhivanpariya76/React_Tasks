import { Link } from 'react-router-dom'
import React from 'react'

const Login = () => {
  return (
    <div className='form-container'>
      {/* Page Title */}
      <h1 className='form-title'>Welcome Back</h1>

      {/* Login Form */}
      <form>
        {/* Email Field */}
        <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id='email' name='email' placeholder='Enter Your Email' />
        </div>

        {/* Password Field */}
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' name='password' placeholder='Enter Your Password' />
        </div>

        {/* Submit Button */}
        <button type='submit' className='btn-primary'>Login</button>

      </form>

      {/* Link to Register Page */}
      <p className="link-text">
        Dont't have an account? <Link to="/Login">Login here</Link>
      </p>

    </div>
  )
}

export default Login
