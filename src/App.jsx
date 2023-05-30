import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

// pages
import AuthPage from './pages/auth';
import CartPage from './pages/cart/cart';
import ProductsPage from './pages/cart/products';
import TodoPage from './pages/todo';
import HomePage from './pages/home';

// redux store
import store from './redux/store';

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

  return (
    <ReduxProvider store={store}>
      <RouterProvider router={router} />
    </ReduxProvider>
  );
}

export default App;
