import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Apperror() {
const a = new String(window.location.href);
const b = a.split("/");
console.log(b[3]);

const [xyz,abc]=useState("");
const [y,x]=useState("bg-danger");

const mynav = ()=>{
    if(b[3]==="userdashboard")
    {
        abc("/userdashboard");
        x("bg-success");
    }
    else if(b[3]==="admindashboard")
    {
        abc("/admindashboard");
        x("bg-info");
    }
    else
    {
        abc("/");
        x("bg-danger");
    }

}
useEffect(()=>{
    mynav();
},[])

  return (
   <div className={`container-fluid  ${y}`}>
    <div className='row'>
        <div className='col-12 text-center'>
            <h1>404</h1>
            
            <p>Page Not Found</p>
            <Link to={xyz} className='btn btn-danger btn-ms'> back to dashboard</Link>
        </div>
    </div>
   </div>
  )
}

export default Apperror