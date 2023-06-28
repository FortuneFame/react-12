import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';

import Home from './pages/Home'
import MyRef from './pages/MyRef';
import Portal from './pages/Portal';
import Context from './pages/Context';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
    {
        path: '/',
        element: <Home />,
      },
      {
        path: '/my-ref',
        element: <MyRef />,
      },
      {
        path: '/portal',
        element: <Portal />,
      },
      {
        path: '/context',
        element: <Context />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);