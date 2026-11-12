import React from 'react'
import { Link } from 'react-router-dom';
const applications = [
    {
      id: 1,
      title: 'User Management',
      icon: '👥',
      description: 'Manage users, profiles, registration and user activities.',
      color: 'primary',
      path: '/users',
      count: '1,250 Users'
    },
    {
      id: 2,
      title: 'Admin Management',
      icon: '🛡️',
      description: 'Manage administrators, permissions and access control.',
      color: 'success',
      path: '/admins',
      count: '12 Admins'
    }
  ];

function Homepage() {
  return (
    <div className="bg-light min-vh-100">
      
      <div className="container py-5">
        
        <div className="text-center mb-5">
          <h2 className="fw-bold">Application Dashboard</h2>
          <p className="text-secondary">
            Select a management application to continue
          </p>
        </div>

        <div className="row justify-content-center g-4 text-center">

          {applications.map((item) => (
            <div className="col-md-6 col-lg-4" key={item.id}>
              
              <Link
                to={item.path}
                className="text-decoration-none"
              >
                <div className="card border-0 shadow-sm h-100 p-3 
                  management-card">

                  <div className="card-body">

                    <div className={`bg-${item.color}-subtle rounded-3 
                      d-flex align-items-center justify-content-center mb-4`}
                      style={{ width: '70px', height: '70px', fontSize: '25px' }}>
                      {item.icon}
                    </div>

                    <h4 className="fw-bold text-dark">
                      {item.title}
                    </h4>


                    

                  </div>
                </div>
              </Link>

            </div>
          ))}

        </div>
      </div>

      
    </div>
  
  )
}

export default Homepage