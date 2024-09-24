import { NavLink } from 'react-router-dom';

// import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <>
      <header id='main-nav'>
        <nav>
          <ul>
            <li>
              <NavLink
                to='/'
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/products'
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                Our Products
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainNavigation;
