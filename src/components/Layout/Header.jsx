import React, { useContext } from 'react';
import lightLogo from './../../assets/images/black logo 1.png';
import darkLogo from './../../assets/images/Group 11.png';
import ThemeToggle from '../themeToggle/themeToggle';
import { ThemeContext } from '../../contexts/ThemeContext';

const Header = ({ onJoinClick }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light mt-3 container">
        <ThemeToggle />
        <div className=" navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <img
              src={theme === 'dark' ? darkLogo : lightLogo}
              width="146"
              height="56"
              className="d-inline-block align-top"
              alt="aallie logo"
            />
          </ul>
        </div>

        <button className="btn btn-join-aallie" onClick={onJoinClick}>
          Join aallie
        </button>
      </nav>
    </>
  );
};

export default Header;
