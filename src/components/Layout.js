import { Link, NavLink, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useAuth } from '../context/AuthContext';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  const { isAuthenticated, user, logout } = useAuth();
  return (
    <>
      <ToastContainer />
      <nav className='navbar navbar-expand navbar-dark bg-dark' aria-label='Second navbar example'>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>
            Cities in the world! ✈️🌍
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarsExample02'
            aria-controls='navbarsExample02'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarsExample02'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <NavLink to='/' className='nav-link'>
                  {user ? `Welcome back, ${user.name}` : 'Home'}
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/about' className='nav-link'>
                  About
                </NavLink>
              </li>
              {isAuthenticated ? (
                <>
                  <li className='nav-item'>
                    <NavLink to='/protected/new-post' className='nav-link'>
                      Create post
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <p className='nav-link' style={{ cursor: 'pointer' }} onClick={logout}>
                      Logout
                    </p>
                  </li>
                </>
              ) : (
                <>
                  <li className='nav-item'>
                    <NavLink to='/register' className='nav-link'>
                      Register
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink to='/login' className='nav-link'>
                      Login
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
