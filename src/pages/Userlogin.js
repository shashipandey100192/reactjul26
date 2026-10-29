import React from 'react'
import { Link } from 'react-router-dom'

function Userlogin() {
    // return (
    //     <div className='container mt-5'>
    //         <div className='row justify-content-center'>
    //             <div className='col-md-5'>
    //                 <div className="card shadow">
    //                     <div className="card-header bg-primary text-white text-center">
    //                         <h2>Login Form</h2>
    //                     </div>

    //                     <div className="card-body">
    //                         <form>
    //                             <div className="mb-3">
    //                                 <label className="form-label">Email</label>
    //                                 <input type="email" className="form-control" placeholder="Enter email" />
    //                             </div>
    //                             <div className="mb-3">
    //                                 <label className="form-label">Password</label>
    //                                 <input type="password" className="form-control" placeholder="Enter password" />
    //                             </div>
    //                             <button className="btn btn-primary">
    //                                 Login
    //                             </button>
    //                         </form>
    //                     </div>
    //                 </div>

    //             </div>
    //         </div>
    //     </div>
    // );
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-4 shadow m-3'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12 text-center p-3'>
                                <p className='h3'>User Login</p>
                            </div>
                            <div className='col-md-12'>
                                <div class="mb-3">
                                    <label class="form-label">Email address</label>
                                    <input type="email" class="form-control" />
                                </div>
                            </div>

                            <div className='col-md-12'>
                                <div class="mb-3">
                                    <label class="form-label">Password</label>
                                    <input type="password" class="form-control" />
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div class="mb-3">
                                    <input type="checkbox"/>
                                </div>
                            </div>

                            <div className='col-md-12'>
                                <div class="mb-3">
                                    <input type="button" class="btn btn-success" value="Login" />
                                    <Link to="registor" className='float-end'>New Registor</Link>
                                </div>
                            </div>

                        </div>


                    </div>




                </div>
            </div>
        </div>
    )


}

export default Userlogin