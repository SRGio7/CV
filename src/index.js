import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./style.css";
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactUs from './pages/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "contact",
    element: <ContactUs />,
  },
  {
    path: "*",
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

reportWebVitals(); 
