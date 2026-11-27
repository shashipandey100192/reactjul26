// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { Link } from 'react-router-dom';

// function Productpage() {
//     const [user, userlist] = useState([]);
//     const apidata = () => {
//         axios.get("https://dummyjson.com/users?limit=50").then((r) => {
//             console.log(r.data);
//             userlist(r.data.users);
//         })
//     };

//     useEffect(() => {
//         apidata();
//     }, []);



//     return (
//         <div className='container-fluid'>
//             <div className='row'>
//                 {user.map((c,a) => {
//                     return (
//                         <div className='col-md-3 mt-2' key={a}>
//                             <Link to={"details/"+c.id} className='card p-2 shadow'>
//                                 <h5>name:{c.username}</h5>
//                                 <p>Email Id: {c.email}</p>
//                                 <p>Phone No: {c.phone}</p>
//                             </Link>
//                         </div>
//                     )
//                 })}
//             </div>
//         </div>
//     )
// }

// export default Productpage



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Productpage() {

    const [user, userlist] = useState([]);

    const apidata = () => {
        axios.get("https://dummyjson.com/users?limit=50")
            .then((r) => {
                userlist(r.data.users);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        apidata();
    }, []);

    return (
        <div className="container-fluid bg-light min-vh-100 py-4">

            {/* Page Header */}
            <div className="bg-white border rounded shadow-sm p-3 mb-4">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h4 className="fw-bold mb-1">
                            <i className="bi bi-people-fill text-primary me-2"></i>
                            User Management
                        </h4>
                        <small className="text-muted">
                            Dashboard / User List
                        </small>
                    </div>

                    <span className="badge bg-primary p-2">
                        Total Users: {user.length}
                    </span>
                </div>
            </div>

            {/* User Cards */}
            <div className="row">

                {user.map((c, a) => {

                    return (

                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-4"
                            key={c.id}>

                            <div className="card user-card h-100 shadow-sm">

                                {/* Card Header */}
                                <div className="card-header bg-white border-bottom d-flex justify-content-between align-items-center py-3">
                                    <span className="fw-bold text-secondary">
                                        USER #{c.id}
                                    </span>

                                    <span className="badge bg-success">
                                        Active
                                    </span>
                                </div>

                                {/* Card Body */}
                                <div className="card-body text-center">

                                    <img
                                        src={c.image}
                                        alt={c.username}
                                        className="rounded-circle border border-3 p-1 mb-3"
                                        style={{
                                            width: "105px",
                                            height: "105px",
                                            objectFit: "cover"
                                        }}
                                    />

                                    <h5 className="fw-bold mb-1">
                                        {c.firstName} {c.lastName}
                                    </h5>

                                    <p className="text-primary small mb-3">
                                        @{c.username}
                                    </p>

                                    <hr />

                                    <div className="text-start">

                                        <p className="mb-2 small text-muted">
                                            <i className="bi bi-envelope-fill text-primary me-2"></i>
                                            <strong className="text-dark">
                                                {c.email}
                                            </strong>
                                        </p>

                                        <p className="mb-2 small text-muted">
                                            <i className="bi bi-telephone-fill text-success me-2"></i>
                                            <strong className="text-dark">
                                                {c.phone}
                                            </strong>
                                        </p>

                                        <p className="mb-2 small text-muted">
                                            <i className="bi bi-geo-alt-fill text-danger me-2"></i>
                                            <strong className="text-dark">
                                                {c.address.city}, {c.address.state}
                                            </strong>
                                        </p>

                                        <p className="mb-0 small text-muted">
                                            <i className="bi bi-building text-secondary me-2"></i>
                                            <strong className="text-dark">
                                                {c.company.name}
                                            </strong>
                                        </p>

                                    </div>

                                </div>

                                {/* Card Footer */}
                                <div className="card-footer bg-white border-top p-3">

                                    <div className="d-flex justify-content-between align-items-center">

                                        <small className="text-muted">
                                            {c.role}
                                        </small>

                                        <Link
                                            to={"details/" + c.id}
                                            className="btn btn-sm btn-primary px-3"
                                        >
                                            View Profile
                                            <i className="bi bi-arrow-right ms-2"></i>
                                        </Link>

                                    </div>

                                </div>

                            </div>

                        </div>

                    );

                })}

            </div>

            {/* Loading */}
            {user.length === 0 && (
                <div className="text-center p-5">
                    <div className="spinner-border text-primary"></div>
                    <p className="text-muted mt-2">Loading Users...</p>
                </div>
            )}

        </div>
    );
}

export default Productpage;
