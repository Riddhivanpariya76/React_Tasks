import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'

const Login = () => {
  const [formData, setFormData] = useState({
    email : "",
    password : "",
  });


  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // logic section
  const handleInputChange = (e) => {

    //method declare
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  // validation
  const validate = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;
    const user = JSON.parse(localStorage.getItem("authData"));

    if (
      user && 
      user.email === formData.email &&
      user.password === formData.password
    )
    {
      alert("Loginn successfull");
      navigate("/dashboard");
    } 
    else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className='form-container'>
      {/* Page Title */}
      <h1 className='form-title'>Welcome Back</h1>

      {/* Login Form */}
      <form onSubmit={handleSubmit}>
        {/* Email Field */}
        <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id='email' name='email' value={formData.email} placeholder='Enter Your Email' onChange={handleInputChange} />
        </div>

        {/* Password Field */}
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' name='password' value={formData.password} placeholder='Enter Your Password' onChange={handleInputChange} />

            {errors.password && (
            <span className="error-msg">{errors.password}</span>
          )}
        </div>

        {/* Submit Button */}
        <button type='submit' className='btn-primary'>Login</button>

      </form>

      {/* Link to Register Page */}
      <p className="link-text">
        Dont't have an account? <Link to="/register">Register here</Link>
      </p>

    </div>
  );
};

export default Login
