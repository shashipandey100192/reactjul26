import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./css/style.css";
import Xyz,{Abc, Companyinfo, Service, Student} from './pages/About';
import Bootstrappage from './pages/Bootstrappage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Xyz/>
    <Abc/>
    <Student></Student>
    <Companyinfo></Companyinfo>
    <Service/>
    <Bootstrappage/>
   
  </React.StrictMode>
);
