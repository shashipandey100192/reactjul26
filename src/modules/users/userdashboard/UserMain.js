import React from 'react'
import { Link } from 'react-router-dom';

const modules = [
  { id: 1, name: 'Dashboard', icon: 'bi-speedometer2', path: '/dashboard' },
  { id: 2, name: 'User Management', icon: 'bi-people', path: '/users' },
  { id: 3, name: 'Admin Management', icon: 'bi-shield-lock', path: '/admins' },
  { id: 4, name: 'Student Management', icon: 'bi-mortarboard', path: '/students' },
  { id: 5, name: 'Teacher Management', icon: 'bi-person-workspace', path: '/teachers' },
  { id: 6, name: 'Employee Management', icon: 'bi-person-badge', path: '/employees' },
  { id: 7, name: 'Department', icon: 'bi-diagram-3', path: '/departments' },
  { id: 8, name: 'Course Management', icon: 'bi-book', path: '/courses' },
  { id: 9, name: 'Attendance', icon: 'bi-calendar-check', path: '/attendance' },
  { id: 10, name: 'Fees Management', icon: 'bi-cash-stack', path: '/fees' },
  { id: 11, name: 'Payment History', icon: 'bi-credit-card', path: '/payments' },
  { id: 12, name: 'Reports', icon: 'bi-file-earmark-bar-graph', path: '/reports' },
  { id: 13, name: 'Examination', icon: 'bi-journal-check', path: '/exams' },
  { id: 14, name: 'Results', icon: 'bi-award', path: '/results' },
  { id: 15, name: 'Notice Board', icon: 'bi-megaphone', path: '/notices' },
  { id: 16, name: 'Messages', icon: 'bi-chat-dots', path: '/messages' },
  { id: 17, name: 'Library', icon: 'bi-journal-bookmark', path: '/library' },
  { id: 18, name: 'Settings', icon: 'bi-gear', path: '/settings' },
  { id: 19, name: 'Profile', icon: 'bi-person-circle', path: '/profile' },
  { id: 20, name: 'Help & Support', icon: 'bi-headset', path: '/support' }
];


function UserMain() {
   return (
    <div className="container-fluid bg-light min-vh-100 p-3">

      {/* Header */}
      <div className="bg-white border rounded p-3 mb-3">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h5 className="fw-bold mb-1">Management Portal</h5>
            <small className="text-muted">
              Application Modules / Main Dashboard
            </small>
          </div>

          <span className="badge bg-secondary">
            Administrator
          </span>
        </div>
      </div>

      {/* Module Heading */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6 className="fw-bold mb-0">All Application Modules</h6>
        <span className="text-muted small">20 Modules</span>
      </div>

      {/* Modules */}
      <div className="row g-3">

        {modules.map((item) => (

          <div className="col-6 col-md-3 col-lg-2 col-xl-1" key={item.id}>

            <Link
              to={item.path}
              className="text-decoration-none text-dark"
            >

              <div className="card module-card h-100">

                <div className="card-body text-center p-3">

                  <i className={`bi ${item.icon} module-icon`}></i>

                  <div className="module-title mt-2">
                    {item.name}
                  </div>

                </div>

              </div>

            </Link>

          </div>

        ))}

      </div>

    </div>
  );
}

export default UserMain