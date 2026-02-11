import React from 'react';
import { Home } from '../pages/Home';

// This file is for future route expansion
// Currently only using the Home page
// To add routing, install react-router-dom and configure routes here

export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  // Add more routes here in the future
  // Example:
  // {
  //   path: '/about',
  //   element: <About />,
  // },
];
