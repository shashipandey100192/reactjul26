import React, { Fragment } from 'react'
import Appheader from '../../sharecomponents/Appheader'
import Appsidebar from '../../sharecomponents/Appsidebar'
import Appfooter from '../../sharecomponents/Appfooter'
import UserMain from './UserMain'
import { Outlet } from 'react-router-dom'

function UserLandingPage() {
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

          </div>
        </div>
      </div>
      <Appfooter />
    </Fragment>
  )
}

export default UserLandingPage