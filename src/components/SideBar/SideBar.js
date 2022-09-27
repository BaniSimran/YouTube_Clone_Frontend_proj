import React from 'react';
import SideBarRow from './../SideBarRow/SideBarRow';
import './SideBar.css';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';

const SideBar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <SideBarRow selected Icon={HomeIcon} title="Home" />
      </Link>
      <Link to="/">
        <SideBarRow Icon={WhatshotIcon} title="Trending" />
      </Link>
    </div>
  );
};

export default SideBar;
