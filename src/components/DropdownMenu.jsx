import React from 'react';
import './DropdownMenu.css';
import PlayStationIcon from '../assets/playstation.svg';
import XboxIcon from '../assets/xbox.svg';
import PcIcon from '../assets/pc.svg';
import { Link } from 'react-router-dom';

const DropdownMenu = () => {
  return (
    <div className="dropdown-menu">
      <div className="dropdown-item">
        <img src={PlayStationIcon} alt="PlayStation" style={{ width: '50px', height: '50px' }} />
        <div className="subcategories">
          <Link to="/juegosps3">PS3</Link>
          <Link to="/juegosps4">PS4</Link>
          <Link to="/juegosps5">PS5</Link>
        </div>
      </div>
      <div className="dropdown-item">
        <img src={XboxIcon} alt="Xbox" style={{ width: '50px', height: '50px' }} />
        <div className="subcategories">
          <Link to="/juegos360">360</Link>
          <Link to="/juegosone">ONE</Link>
          <Link to="/juegosseriesx">SERIES X</Link>
        </div>
      </div>
      <div className="dropdown-item">
        <img src={PcIcon} alt="PC" style={{ width: '50px', height: '50px' }} />
        <div className="subcategories">
          <Link to="/juegospc">PC</Link>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
