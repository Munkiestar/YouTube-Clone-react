import React from "react";

import "./Sidebar.scss";

import SidebarRow from "../SidebarRow/SidebarRow";

import { Link, BrowserRouter as Router } from "react-router-dom";

// Material Icons
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import SlideshowIcon from "@material-ui/icons/Slideshow";
import WatchLaterSharpIcon from "@material-ui/icons/WatchLaterSharp";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import YouTubeIcon from "@material-ui/icons/YouTube";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import HourglassFullIcon from "@material-ui/icons/HourglassFull";
import SettingsIcon from "@material-ui/icons/Settings";
import FlagIcon from "@material-ui/icons/Flag";
import HelpIcon from "@material-ui/icons/Help";
import FeedbackIcon from "@material-ui/icons/Feedback";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={WhatshotIcon} title="Trending" />
      <SidebarRow Icon={SubscriptionsIcon} title="Subscriptions" />
      <hr />
      <SidebarRow Icon={VideoLibraryIcon} title="Library" />
      <SidebarRow Icon={HistoryIcon} title="History" />
      <SidebarRow Icon={SlideshowIcon} title="Your videos" />
      <SidebarRow Icon={WatchLaterSharpIcon} title="Watch Later" />
      <SidebarRow Icon={ThumbUpAltIcon} title="Liked videos" />
      <SidebarRow Icon={ExpandMoreIcon} title="Subscriptions" />
      <hr />

      <h3 className="sidebar__title">More from Youtube</h3>
      <SidebarRow Icon={YouTubeIcon} title="YouTube Premium" />
      <SidebarRow Icon={SportsEsportsIcon} title="Gaming" />
      <SidebarRow Icon={LiveTvIcon} title="Live" />
      <SidebarRow Icon={HourglassFullIcon} title="Sports" />
      <hr />

      <SidebarRow Icon={SettingsIcon} title="Settings" />
      <SidebarRow Icon={FlagIcon} title="Report History" />
      <SidebarRow Icon={HelpIcon} title="Help" />
      <SidebarRow Icon={FeedbackIcon} title="Send feedback" />
      <hr />

      <Router>
        <div className="sidebar__links">
          <div className="sidebar__links-top">
            <Link to="/">About</Link>
            <Link to="/">Press</Link>
            <Link to="/">Copyright</Link>
            <Link to="/">Contact us</Link>
            <Link to="/">Creators</Link>
            <Link to="/">Advertise</Link>
            <Link to="/">Developers</Link>
          </div>

          <div className="sidebar__links-bottom">
            <Link to="/">Terms</Link>
            <Link to="/">Privacy</Link>
            <Link to="/">Policy & Safety</Link>
            <Link to="/">How YouTube works</Link>
            <Link to="/">Test new features</Link>
          </div>

          <div className="sidebar__links-copyright">
            <p>&copy; 2021 Google LLC</p>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default Sidebar;
