/*eslint-disable*/
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Categories from './components/Categories/Categories.jsx';
import Header from './components/Header/Header.jsx';
import Services from './components/Services/Services.jsx';
import Aboutus from './components/Aboutus/Aboutus.jsx';
import CategoryDetails from './components/CategoryDetails/CategoryDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "services",
        element: <Services></Services>
      },
      {
        path: 'categories',
        element: <Categories></Categories>,
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      },
      {
        path: 'category/:idCategory',
        element: <CategoryDetails></CategoryDetails>,
        loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/categories.php/${params.idCategory}`)

      },
      {
        path: 'aboutus',
        element: <Aboutus></Aboutus>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
