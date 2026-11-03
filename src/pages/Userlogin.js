import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Userlogin() {

    // const user = "kumar";
    const [user,updateuser]=useState("xyz");
const abc=(a)=>{
    updateuser(a.target.value);
    console.log(a)
}


    return (
        <div className='container co-bg'>
            <div className='row justify-content-center'>
                <div className='col-md-4 shadow m-3'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12 text-center p-3'>
                                <p className='h3 italic'>User Login</p>
                            </div>
                            <div className='col-md-12'>
                                <div class="mb-3">
                                    <label class="form-label">Email address</label>
                                    <input type="email" class="form-control" value={user} onInput={abc}/>
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