import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast,ToastContainer } from 'react-toastify';
import axios from 'axios';

function UserRegistor() {
    const mynav = useNavigate();

    const {register,handleSubmit,formState: { errors }} = useForm();

    const myregistor = (userlist)=>{
        console.log(userlist)
        axios.post("http://localhost:5800/users",userlist).then((r)=>{
            console.log(r);
           toast.success("successfully submited",{position:"top-left",theme:'dark',autoClose:2000});
            setTimeout(()=>{
                mynav("/users");
            },2000)
        });
    }


  return (
    <form onSubmit={handleSubmit(myregistor)}>     
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-8 shadow m-3'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12 text-center p-3'>
                                <p className='h3'>User Registor</p>
                                <ToastContainer/>
                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">Email address</label>
                                    <input type="email" class="form-control" {...register("email",{required:true})}/>
                                    {errors.email && <p className='text-danger'>email is required</p>}
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">Phone No</label>
                                    <input type="text" class="form-control" {...register("phone",{required:true})}/>
                                    {errors.phone && <p className='text-danger'>phone no is required</p>}
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">DOB</label>
                                    <input type="date" class="form-control" {...register("date",{required:true})}/>
                                    {errors.date && <p className='text-danger'>date of birth is required</p>}
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">UserName</label>
                                    <input type="text" class="form-control" {...register("username",{required:true})}/>
                                    {errors.username && <p className='text-danger'>username is required</p>}
                                </div>
                            </div>


                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">Password</label>
                                    <input type="password" class="form-control" {...register("pass",{required:true})}/>
                                    {errors.pass && <p className='text-danger'>password is required</p>}
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div class="mb-3">
                                    <input type="submit" class="btn btn-success" value="Registor Now" />
                                    <Link to="/users" className='float-end'>Login</Link>
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

export default UserRegistor