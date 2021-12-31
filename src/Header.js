import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from "./HeaderOption";
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";
import { logout, selectUser } from "./features/userSlice";
function Header() {

  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut();
  }
  return (
    <div className='header'>
      <div className="header__left">
        <img src="https://lh3.googleusercontent.com/exztFUia2xbCt6AESLasYEsULFPLcxNllFv-P4ZkWsbzdLjUrNjQv8zbu09i1C12QjtvGWpFuJlsh2shnEZ9O1D5NMzUmpEQrSyxQyzcLTg7pgZChAUK3gSjtKYKFXnOKP-xaiu-=w2400"
          alt=""
        />
        
        <div className="header__search">
          <SearchIcon />
            <input placeholder="Search" type="text"/>
        </div>
    </div>
        
      <div className="header__right">
        <HeaderOption Icon={HomeIcon}title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar={true}
          title="Me"
        onClick={logoutOfApp}/>
        </div>
    </div>
  );
}

export default Header;