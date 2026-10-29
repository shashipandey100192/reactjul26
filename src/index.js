import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./css/style.css";
import Xyz,{Abc, Companyinfo, Service, Student} from './pages/About';
import Bootstrappage from './pages/Bootstrappage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aboutpage from './pages/About';
import Errorpage from './pages/Errorpage';
import Userlogin from './pages/Userlogin';
import UserRegistorpage from './pages/UserRegistorpage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
          <Route path='' element={<Userlogin/>}/>
          <Route path='about' element={<Aboutpage/>}></Route>
          <Route path="registor" element={<UserRegistorpage/>}/>
          <Route path='*' element={<Errorpage/>}></Route>
      </Routes>
    
    
    </BrowserRouter>

   
  </React.StrictMode>
);
