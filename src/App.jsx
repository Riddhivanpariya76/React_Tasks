import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Register from './pages/Register'
import Login from './pages/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import AuthGuard from './auth/AuthGuard'

const DefaultRoute = () => {
  const loginData = JSON.parse(localStorage.getItem('loginData'));
  if (loginData) {
    return <Navigat to = "/dashboard" replace />;
  }
  return <Navigat to = "/login" replace />;
};

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <DefaultRoute />
    },
    {
      path: "/login",
      element: (
        <AuthGuard required={false}>
        <Login />
        </AuthGuard>
        ),
    },
    {
      path: "/register",
      element: (
        <AuthGuard required={false}>
        <Register />
        </AuthGuard>
        ), 
    },
    {
      path: "/dashboard",
      element: (
        <AuthGuard required={true}>
        <Dashboard/>
        </AuthGuard>
        ),
    }
  ]);

  return <RouterProvider router={route}/>;
}

export default App
