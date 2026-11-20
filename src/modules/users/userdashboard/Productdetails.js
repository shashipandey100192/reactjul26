import React, { useEffect,useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

function Productdetails() {
    const {id} = useParams();

     const [prod, prodetails] = useState({});
        const apidata = () => {
            axios.get(`https://dummyjson.com/users/${id}`).then((r) => {
                console.log(r.data);
                prodetails(r.data);
            })
        };

useEffect(()=>{
    apidata();
},[])

  return (
   <div className='container-fluid'>
    <div className='row'>
        <div className="bg-white border rounded p-3 mb-3">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h5 className="fw-bold mb-1">Productdetails page</h5>
           
          </div>

          <Link to="/userdashboard/productlist" className="badge bg-secondary btn btn-info p-2">
            Back
          </Link>
        </div>
      </div>
        <div className='col-md-12'>
            <h1>User Id: {prod.id}</h1>
            <h3>Name: {prod.username}</h3>
            <img src={prod.image} alt='sdkfj'/>
            <p>email id: {prod.email}</p>
            <p>Phone No: {prod.phone}</p>
        </div>
    </div>
   </div>
  )
}

export default Productdetails