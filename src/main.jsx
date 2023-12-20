import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './component/Main/Main';
import Home from './component/Main/Home';
import Error from './Error';
import About from './component/About/About';
import Experiences from './component/About/Experiences';
import Contact from './component/About/Contact';
import Resume from './component/About/Resume';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<Error></Error>,
    children:[{
      path:'/',
      element:<Home></Home>
    },
  {
    path:'/about',
    element:<About></About>
  },
  {
    path:'/experience',
    element:<Experiences></Experiences>
  },
  {
    path:'/contact',
    element:<Contact></Contact>
  },{
    path:'/resume',
    element:<Resume></Resume>
  }
  
  
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='max-w-7xl mx-auto' >
   <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
 </div>,
)
