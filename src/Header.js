import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from "./HeaderOption";
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
  return (
    <div className='header'>
      <div className="header__left">
        <img src="https://lh3.googleusercontent.com/exztFUia2xbCt6AESLasYEsULFPLcxNllFv-P4ZkWsbzdLjUrNjQv8zbu09i1C12QjtvGWpFuJlsh2shnEZ9O1D5NMzUmpEQrSyxQyzcLTg7pgZChAUK3gSjtKYKFXnOKP-xaiu-=w2400"
          alt=""
        />
        
        <div className="header__search">
          <SearchIcon />
            <input type="text"/>
        </div>
    </div>
        
      <div className="header__right">
        <HeaderOption Icon={HomeIcon}title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar="https://lh3.googleusercontent.com/cZgfVJkP3134TGKRL5RdtMpd8ElLZktf5W9Z_GqQCBJRnfyd07w2Qo1-bZbGBxCdh0F0KaS3ODtpa0qJwdaiLMBTtmVMztTLNKOOmdu60ZexT0NZGB4uYYugZ99xHNMtXOMz9Gu8=s134-p-k" title="Me" />
        </div>
    </div>
  );
}

export default Header;