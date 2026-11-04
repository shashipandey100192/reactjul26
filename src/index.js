import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";  
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./modules/css/style.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './modules/Homepage';
import UserMain from './modules/users/userdashboard/UserMain';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Homepage/>}/>
        <Route path='xyz' element={<UserMain/>}/>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);
