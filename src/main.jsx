import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AddCoffee from './components/AddCoffee.jsx'
import UpdateCoffee from './components/UpdateCoffee.jsx'

const router = createBrowserRouter([
  {
    path: '/', 
    element: <App />,
    loader: () => fetch("http://localhost:5000/coffee")
  },
  {
    path: '/addCoffee',
    element: <AddCoffee />,
  },
  {
    path: '/updateCoffee/:id',
    element: <UpdateCoffee />,
    loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
