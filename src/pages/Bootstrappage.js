import React from 'react'
import { Button } from 'react-bootstrap';
import { FaHouseUser } from "react-icons/fa";


function Bootstrappage() {
  return (  
    <div className='container border bg-info'>
        <div className='row'>
            <div className='col-12'>
                <p className='h1'>this is bootstrap page</p>
                <button className='btn btn-primary'>submit</button>
                <Button variant="primary">submit button</Button>
               <h1 className='text-danger'> <FaHouseUser/> </h1>
            </div>
        </div>
    </div>
  )
}

export default Bootstrappage