import React from 'react';
import ReactDOM from 'react-dom/client';
import { lazy,Suspense } from 'react';
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
import Productdetails from './modules/users/userdashboard/Productdetails';
import AdminLogin from './modules/admin/auth/AdminLogin';
import AdminContainerpage from './modules/admin/admindashboard/AdminContainerpage';
import Landingpage from './modules/admin/admindashboard/Landingpage';
import Headoffice from './modules/users/mainbranch/Headoffice';
import Apperror from './modules/sharecomponents/Apperror';
import Graphpage from './modules/users/userdashboard/Graphpage';
import Dashboardpage from './modules/users/userdashboard/Dashboardpage';
// import Lazypage from './modules/users/userdashboard/Lazypage';
const Lazypage = lazy(()=>import("./modules/users/userdashboard/Lazypage.js"));



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Homepage/>}/>
        <Route path='users' element={<UserLogin/>}/>
        <Route path='users/registor' element={<UserRegistor/>}/>
        <Route path='userdashboard' element={<UserLandingPage/>}>
              <Route path='' element={<Dashboardpage/>}/>
              <Route path='productlist' element={<Productpage/>}/>
              <Route path='productlist/details/:id' element={<Productdetails/>}/>
              <Route path='propspage' element={<Headoffice/>}></Route>
              <Route path='graphpage' element={<Graphpage/>}></Route>
              <Route path='lazyloadingpage' element={<Suspense fallback={<h1 className='myloader'>Loading page...</h1>}>
                      <Lazypage/>
                  </Suspense>}>
              </Route>

              <Route path='*' element={<Apperror/>}/>
        </Route>
        <Route path='admins' element={<AdminLogin/>}/>
        <Route path='admindashboard' element={<AdminContainerpage/>}>
          <Route path='' element={<Landingpage/>}></Route>
        </Route>

        <Route path='*' element={<Apperror/>}/> 
        <Route path='xyz' element={<UserMain/>}/>

      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);
