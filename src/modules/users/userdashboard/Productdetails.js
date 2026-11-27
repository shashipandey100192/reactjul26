// import React, { useEffect,useState } from 'react'
// import { Link, useParams } from 'react-router-dom'
// import axios from 'axios';

// function Productdetails() {
//     const {id} = useParams();

//      const [prod, prodetails] = useState({});
//         const apidata = () => {
//             axios.get(`https://dummyjson.com/users/${id}`).then((r) => {
//                 console.log(r.data);
//                 prodetails(r.data);
//             })
//         };

// useEffect(()=>{
//     apidata();
// },[])

//   return (
//    <div className='container-fluid'>
//     <div className='row'>
//         <div className="bg-white border rounded p-3 mb-3">
//         <div className="d-flex justify-content-between align-items-center">
//           <div>
//             <h5 className="fw-bold mb-1">Productdetails page</h5>
           
//           </div>

//           <Link to="/userdashboard/productlist" className="badge bg-secondary btn btn-info p-2">
//             Back
//           </Link>
//         </div>
//       </div>
//         <div className='col-md-12'>
//             <h1>User Id: {prod.id}</h1>
//             <h3>Name: {prod.username}</h3>
//             <img src={prod.image} alt='sdkfj'/>
//             <p>email id: {prod.email}</p>
//             <p>Phone No: {prod.phone}</p>
//         </div>
//     </div>
//    </div>
//   )
// }

// export default Productdetails



import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Productdetails = () => {

    const { id } = useParams();
    const [prod, setProd] = useState({});

    useEffect(() => {
        fetch(`https://dummyjson.com/users/${id}`)
            .then(res => res.json())
            .then(data => setProd(data))
            .catch(err => console.log(err));
    }, [id]);

    return (
        <div className="container-fluid py-4 bg-light">

            {/* Header */}
            <div className="bg-white border rounded shadow-sm p-3 mb-4">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h5 className="fw-bold mb-1">
                            User Details
                        </h5>
                        <small className="text-muted">
                            User Management / Profile Details
                        </small>
                    </div>

                    <Link
                        to="/userdashboard/productlist"
                        className="btn btn-secondary btn-sm px-4"
                    >
                        <i className="bi bi-arrow-left"></i> Back
                    </Link>
                </div>
            </div>

            {prod.id && (
                <>
                    {/* Profile Card */}
                    <div className="card border-0 shadow-sm mb-4">
                        <div className="card-body p-4">
                            <div className="row align-items-center">

                                <div className="col-md-2 text-center">
                                    <img
                                        src={prod.image}
                                        alt={prod.username}
                                        className="rounded-circle border border-3 p-1"
                                        style={{
                                            width: '130px',
                                            height: '130px',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </div>

                                <div className="col-md-7">
                                    <h3 className="fw-bold mb-1">
                                        {prod.firstName} {prod.lastName}
                                    </h3>

                                    <p className="text-muted mb-2">
                                        @{prod.username}
                                    </p>

                                    <span className="badge bg-primary me-2">
                                        {prod.role}
                                    </span>

                                    <span className="badge bg-success">
                                        {prod.gender}
                                    </span>

                                    <p className="mt-3 mb-0">
                                        <i className="bi bi-envelope text-primary me-2"></i>
                                        {prod.email}
                                    </p>
                                </div>

                                <div className="col-md-3 text-md-end">
                                    <h6 className="text-muted">User ID</h6>
                                    <h2 className="fw-bold text-primary">
                                        #{prod.id}
                                    </h2>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Personal Information */}
                    <div className="row">

                        <div className="col-lg-6 mb-4">
                            <div className="card border-0 shadow-sm h-100">
                                <div className="card-header bg-white py-3">
                                    <h5 className="fw-bold mb-0">
                                        <i className="bi bi-person-circle text-primary me-2"></i>
                                        Personal Information
                                    </h5>
                                </div>

                                <div className="card-body">
                                    <Detail label="First Name" value={prod.firstName} />
                                    <Detail label="Last Name" value={prod.lastName} />
                                    <Detail label="Age" value={prod.age} />
                                    <Detail label="Gender" value={prod.gender} />
                                    <Detail label="Date of Birth" value={prod.birthDate} />
                                    <Detail label="Blood Group" value={prod.bloodGroup} />
                                    <Detail label="Height" value={`${prod.height} cm`} />
                                    <Detail label="Weight" value={`${prod.weight} kg`} />
                                    <Detail label="Eye Color" value={prod.eyeColor} />
                                    <Detail label="Hair Color" value={prod.hair?.color} />
                                </div>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="col-lg-6 mb-4">
                            <div className="card border-0 shadow-sm h-100">
                                <div className="card-header bg-white py-3">
                                    <h5 className="fw-bold mb-0">
                                        <i className="bi bi-telephone text-primary me-2"></i>
                                        Contact Information
                                    </h5>
                                </div>

                                <div className="card-body">
                                    <Detail label="Email" value={prod.email} />
                                    <Detail label="Phone" value={prod.phone} />
                                    <Detail label="Username" value={prod.username} />
                                    <Detail label="IP Address" value={prod.ip} />
                                    <Detail label="MAC Address" value={prod.macAddress} />
                                    <Detail label="University" value={prod.university} />
                                    <Detail label="Domain" value={prod.domain} />
                                </div>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="col-lg-6 mb-4">
                            <div className="card border-0 shadow-sm h-100">
                                <div className="card-header bg-white py-3">
                                    <h5 className="fw-bold mb-0">
                                        <i className="bi bi-geo-alt text-danger me-2"></i>
                                        Address Details
                                    </h5>
                                </div>

                                <div className="card-body">
                                    <Detail label="Address" value={prod.address?.address} />
                                    <Detail label="City" value={prod.address?.city} />
                                    <Detail label="State" value={prod.address?.state} />
                                    <Detail label="State Code" value={prod.address?.stateCode} />
                                    <Detail label="Postal Code" value={prod.address?.postalCode} />
                                    <Detail label="Country" value={prod.address?.country} />
                                </div>
                            </div>
                        </div>

                        {/* Company */}
                        <div className="col-lg-6 mb-4">
                            <div className="card border-0 shadow-sm h-100">
                                <div className="card-header bg-white py-3">
                                    <h5 className="fw-bold mb-0">
                                        <i className="bi bi-building text-success me-2"></i>
                                        Company Information
                                    </h5>
                                </div>

                                <div className="card-body">
                                    <Detail label="Company" value={prod.company?.name} />
                                    <Detail label="Department" value={prod.company?.department} />
                                    <Detail label="Title" value={prod.company?.title} />
                                    <Detail label="Address" value={prod.company?.address?.address} />
                                    <Detail label="City" value={prod.company?.address?.city} />
                                    <Detail label="Country" value={prod.company?.address?.country} />
                                </div>
                            </div>
                        </div>

                        {/* Bank Details */}
                        <div className="col-lg-6 mb-4">
                            <div className="card border-0 shadow-sm h-100">
                                <div className="card-header bg-white py-3">
                                    <h5 className="fw-bold mb-0">
                                        <i className="bi bi-bank text-primary me-2"></i>
                                        Bank Information
                                    </h5>
                                </div>

                                <div className="card-body">
                                    <Detail label="Card Type" value={prod.bank?.cardType} />
                                    <Detail label="Card Number" value={prod.bank?.cardNumber} />
                                    <Detail label="Card Expiry" value={prod.bank?.cardExpire} />
                                    <Detail label="Currency" value={prod.bank?.currency} />
                                    <Detail label="IBAN" value={prod.bank?.iban} />
                                </div>
                            </div>
                        </div>

                        {/* Other Details */}
                        <div className="col-lg-6 mb-4">
                            <div className="card border-0 shadow-sm h-100">
                                <div className="card-header bg-white py-3">
                                    <h5 className="fw-bold mb-0">
                                        <i className="bi bi-laptop text-info me-2"></i>
                                        Other Information
                                    </h5>
                                </div>

                                <div className="card-body">
                                    <Detail label="EIN" value={prod.ein} />
                                    <Detail label="SSN" value={prod.ssn} />
                                    <Detail label="User Agent" value={prod.userAgent} />
                                    <Detail label="Crypto Coin" value={prod.crypto?.coin} />
                                    <Detail label="Crypto Wallet" value={prod.crypto?.wallet} />
                                    <Detail label="Crypto Network" value={prod.crypto?.network} />
                                </div>
                            </div>
                        </div>

                    </div>
                </>
            )}

            {!prod.id && (
                <div className="text-center bg-white p-5 rounded shadow-sm">
                    <div className="spinner-border text-primary"></div>
                    <p className="mt-2 text-muted">Loading user details...</p>
                </div>
            )}

        </div>
    );
};


// Reusable Detail Component
const Detail = ({ label, value }) => (
    <div className="d-flex justify-content-between border-bottom py-2 gap-3">
        <span className="text-muted">{label}</span>
        <strong className="text-dark text-end">
            {value || 'N/A'}
        </strong>
    </div>
);

export default Productdetails;
