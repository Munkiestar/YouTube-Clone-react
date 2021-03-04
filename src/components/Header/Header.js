import React, { useState } from "react";

import "./Header.scss";

import MenuIcon from "@material-ui/icons/Menu";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import MicSharpIcon from "@material-ui/icons/MicSharp";
import VideoCallSharpIcon from "@material-ui/icons/VideoCallSharp";
import AppsSharpIcon from "@material-ui/icons/AppsSharp";
import NotificationsSharpIcon from "@material-ui/icons/NotificationsSharp";
import Avatar from "@material-ui/core/Avatar";
import youtube_logo from "../../assets/yt-logo-white.svg";
import avatar from "../../assets/klikom.jpg";

import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img className="header__logo" src={youtube_logo} alt="YouTube Logo" />
        </Link>
      </div>

      <div className="header__center">
        <input
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchSharpIcon className="header__center-searchIcon" />
        </Link>
        <MicSharpIcon className="header__center-micIcon" />
      </div>

      <div className="header__right">
        <VideoCallSharpIcon />
        <AppsSharpIcon />
        <NotificationsSharpIcon />
        <Avatar alt="Chuck Norris" src={avatar} />
      </div>
    </div>
  );
}

export default Header;
