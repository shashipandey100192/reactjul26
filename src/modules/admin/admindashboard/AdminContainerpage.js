import React,{Fragment} from 'react'
import { Outlet, useParams } from 'react-router-dom';
import Appheader from '../../sharecomponents/Appheader';
import Appsidebar from '../../sharecomponents/Appsidebar';
import Appfooter from '../../sharecomponents/Appfooter';
function AdminContainerpage() {

    const cr =new String(window.location.href);
    const x = cr.split("/");
    console.log(x[x.length-1]);
  return (
    <Fragment>
      <Appheader />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-2 border'>
            <Appsidebar />
          </div>
          <div className='col-md-10 border' style={{ minHeight: '90vh' }}>
           
            <Outlet></Outlet>
                 {cr}
          </div>
        </div>
      </div>
      <Appfooter />
    </Fragment>
  )
}

export default AdminContainerpage