import React from 'react';
import { Menu } from '@mui/icons-material';
import DreamApp from '../../assets/images/dream-app.png';
import './header.css';

const Header: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-icon-left">
        <img src={DreamApp} alt="Dream App Icon" />
      </div>
      <span className="navbar-icon-right">
        <Menu />
      </span>
    </nav>
  );
};

export default Header;
