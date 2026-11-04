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
      

      <nav className="navbar navbar-dark bg-dark shadow">
        <div className="container-fluid px-4">
          <Link className="navbar-brand fw-bold" to="/">
            Management Portal
          </Link>
          <span className="text-white">Welcome, Admin</span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container py-5">
        
        <div className="text-center mb-5">
          <h2 className="fw-bold">Application Dashboard</h2>
          <p className="text-secondary">
            Select a management application to continue
          </p>
        </div>

        <div className="row justify-content-center g-4">

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
                      style={{ width: '70px', height: '70px', fontSize: '32px' }}>
                      {item.icon}
                    </div>

                    <h4 className="fw-bold text-dark">
                      {item.title}
                    </h4>

                    <p className="text-secondary">
                      {item.description}
                    </p>

                    <div className="d-flex justify-content-between 
                      align-items-center mt-4">

                      <span className={`badge bg-${item.color}-subtle 
                        text-${item.color} p-2`}>
                        {item.count}
                      </span>

                      <span className={`btn btn-${item.color} btn-sm`}>
                        Open Application →
                      </span>

                    </div>

                  </div>
                </div>
              </Link>

            </div>
          ))}

        </div>
      </div>

      <footer className="text-center text-secondary py-4">
        © 2026 Management Portal. All Rights Reserved.
      </footer>
    </div>
  
  )
}

export default Homepage