import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";  
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./modules/css/style.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './modules/Homepage';
import UserMain from './modules/users/userdashboard/UserMain';
import UserLogin from './modules/users/auth/UserLogin';
import UserRegistor from './modules/users/auth/UserRegistor';
import UserLandingPage from './modules/users/userdashboard/UserLandingPage';
import Productpage from './modules/users/userdashboard/Productpage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Homepage/>}/>
        <Route path='users' element={<UserLogin/>}/>
        <Route path='users/registor' element={<UserRegistor/>}/>
        <Route path='userdashboard' element={<UserLandingPage/>}>
              <Route path='' element={<UserMain/>}/>
              <Route path='productlist' element={<Productpage/>}/>
        
        
        </Route>
        <Route path='xyz' element={<UserMain/>}/>

      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);
