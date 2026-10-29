import React from 'react'
import { Link } from 'react-router-dom'

function UserRegistorpage() {
   return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-8 shadow m-3'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12 text-center p-3'>
                                <p className='h3'>User Registor</p>
                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">Email address</label>
                                    <input type="email" class="form-control" />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">Phone No</label>
                                    <input type="text" class="form-control" />
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">DOB</label>
                                    <input type="date" class="form-control" />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">UserName</label>
                                    <input type="text" class="form-control" />
                                </div>
                            </div>


                            <div className='col-md-6'>
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
                                    <input type="button" class="btn btn-success" value="Registor Now" />
                                    <Link to="/" className='float-end'>Login</Link>
                                </div>
                            </div>

                        </div>


                    </div>




                </div>
            </div>
        </div>
    )
}

export default UserRegistorpage