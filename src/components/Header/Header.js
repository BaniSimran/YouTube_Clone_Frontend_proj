import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { Popover, Badge, Button, makeStyles } from '@material-ui/core';
import { CameraAltOutlined, PersonAddOutlined } from '@material-ui/icons';
import { auth } from '../../firebase';
import { useAppContext } from '../../appContext';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

function Header() {
  const [inputSearch, setInputSearch] = useState('');

  const classes = useStyles();

  //for popover - const anchorEl, handleClick, handleClose, open, id
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const { currentUser } = useAppContext();

  return (
    <div className="header">
      <div className="header__left">
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
            alt="youtube_logo"
          />
        </Link>
      </div>

      <div className="header__center">
        <input
          type="text"
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__searchbutton" />
        </Link>
      </div>

      <div className="header__right">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar onClick={handleClick} />
        <Popover
          open={open}
          id={id}
          onClose={handleClose}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
          }}
        >
          <div className="home__popoverContainer">
            <div className="home__popover__top">
              <Badge
                overlap="circle"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                badgeContent={
                  <div className="home__badge">
                    <CameraAltOutlined className="home__camera" />
                  </div>
                }
              >
                <Avatar className={classes.large} />
              </Badge>

              <div className="home__text">
                <div className="home__displayName">
                  {currentUser?.displayName}
                </div>
                <div className="home__mail">{currentUser?.email}</div>
              </div>

              <div className="home__btn">Manage your google account</div>
            </div>

            <div className="home__popover__btm">
              <div className="home__addBtn">
                <PersonAddOutlined className="home__addIcon" />
                <p>Add another account</p>
              </div>

              <Button
                onClick={() => auth.signOut()}
                variant="outlined"
                className="home__signOut"
              >
                Sign Out
              </Button>

              <div className="home__popover__footer">
                <p>Privacy Policy</p>
                <span>•</span>
                <p>Terms of service</p>
              </div>
            </div>
          </div>
        </Popover>
      </div>
    </div>
  );
}

export default Header;
