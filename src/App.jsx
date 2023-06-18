import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// pages
import AuthPage from './pages/auth';
import CartPage from './pages/cart/cart';
import ProductsPage from './pages/cart/products';
import TodoPage from './pages/todo';
import HomePage from './pages/home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/todo',
      element: <TodoPage />,
    },
    {
      path: '/cart/products',
      element: <ProductsPage />,
    },
    {
      path: '/cart',
      element: <CartPage />,
    },
    {
      path: '/auth',
      element: <AuthPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
