import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import { ToastContainer } from 'react-toastify'
import Dashboard from './components/Dashboard.jsx'
import Assessment from './components/Assessment.jsx'
import Profile from './components/Profile.jsx'
import UpdateProfile from './components/UpdateProfile.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>
  },
  {
    path: "/register",
    element: <Register></Register>
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>
  },
  {
    path: "/quiz",
    element: <Assessment></Assessment>
  },
  {
    path: "/profile",
    element: <Profile></Profile>
  },
  {
    path: "/profile/update",
    element: <UpdateProfile></UpdateProfile>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
  </React.StrictMode>,
)