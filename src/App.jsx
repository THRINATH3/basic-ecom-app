import React from 'react';
import './index.css'; 
import RootLayout from './RootLayout';
import { Navigate, RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom';
import Home from './components/home/Home';
import Register from './components/register/Register';
import Login from './components/login/Login';
import About from './components/about/About';
import RoutingError from './RoutingError';
import UserProfile from './components/user-profile/UserProfile';
import Products from './components/products/Products';
import Cart from './components/cart/Cart';
import Edituser from './components/edit-user/Edituser';

function App() {
  const browserRouter = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <RoutingError />,
      children: [
        { path: '', element: <Home /> },
        { path: 'register', element: <Register /> },
        { path: 'login', element: <Login /> },
        { path: 'about', element: <About /> },
        { path: 'edit-user', element: <Edituser /> },
        {
          path: 'user-profile',
          element: <UserProfile />,
          children: [
            { path: 'products', element: <Products /> },
            { path: 'cart', element: <Cart /> },
            { path: '', element:<Navigate to={'products'}/>}
          ]
        },
      ]
    }
  ]);

  return (
    <RouterProvider router={browserRouter} />
  );
}

export default App;
