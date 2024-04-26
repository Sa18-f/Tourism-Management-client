import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import Routes from './Components/Routes/Routes';
import FirebaseProvider from './FirebaseProvider/FirebaseProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
      <RouterProvider router={Routes} />
    </FirebaseProvider>
  </React.StrictMode>,
)
