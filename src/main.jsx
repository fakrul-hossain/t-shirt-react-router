import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Compoments/Home/Home';
import Main from './Compoments/Layout/Main';
import OrderReview from './Compoments/OrderReview/OrderReview';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('t-shirts.json')
      },{
        path: 'review',
        element: <OrderReview></OrderReview>
      },
    ]

  },
]);






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
