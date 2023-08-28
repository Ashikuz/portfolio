import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './component/Layout/Main.jsx';
import ErrorHandling from './component/ErrorHandling/ErrorHandling.jsx';
import Home from './component/Home/Home.jsx';
import AboutMe from './component/AboutMe/AboutMe.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorHandling></ErrorHandling>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/',
        element: <AboutMe></AboutMe>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
