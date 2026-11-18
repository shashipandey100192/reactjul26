import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

function UserLogin() {

const {register,handleSubmit,formState: { errors }} = useForm();

const myform = (formdata)=>{
    console.log(formdata);
    
}


  return (
    <form onSubmit={handleSubmit(myform)}>
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
                                    <input type="email" class="form-control" {...register("email",{required:true})}/>
                                    {errors.email && <p className='text-danger'>email is required</p>}
                                </div>
                            </div>

                            <div className='col-md-12'>
                                <div class="mb-3">
                                    <label class="form-label">Password</label>
                                    <input type="password" class="form-control" {...register("pass",{required:true,minLength:5,maxLength:12})}/>
                                    {errors.pass?.type==="required" && <p className='text-danger'>password is required</p>}
                                    {errors.pass?.type==="minLength" && <p className='text-info'>password minimum 5 charector required</p>}
                                    {errors.pass?.type==="maxLength" && <p className='text-warning'>password maxLength 12 charectors required</p>}
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div class="mb-3">
                                    <input type="checkbox" {...register("condition")}/>
                                </div>
                            </div>

                            <div className='col-md-12'>
                                <div class="mb-3">
                                    <input type="submit" class="btn btn-success" value="Login" />
                                    <Link to="registor" className='float-end'>New Registor</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </form>
  )
}

export default UserLogin