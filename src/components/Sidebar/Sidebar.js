import React from "react";

import "./Sidebar.scss";

import SidebarRow from "../SidebarRow/SidebarRow";

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
      {/*<hr />*/}
    </div>
  );
}

export default Sidebar;
