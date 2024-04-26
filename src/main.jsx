import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Router/Routes.jsx'
import AuthContextProvider from './provider/AuthContextProvider.jsx'
import { RouterProvider } from 'react-router-dom'
// import AuthContextProvider from './provider/AuthContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
