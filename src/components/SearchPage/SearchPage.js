import React from "react";
import "./SearchPage.scss";

import ChannelRow from "../ChannelRow/ChannelRow";

import TuneIcon from "@material-ui/icons/Tune";

function SearchPage(props) {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon />
        <h2> Filter</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://static.dribbble.com/users/5816920/avatars/normal/31d9190a1e41590f022fcd7dbaa9a5a1.jpeg?1596210189"
        channel="Ahmad Zaky"
        isVerified
        subs="12K"
        noOfVideos={20}
        description="Programmer Think and Grow Rich. Do you want to become JavaScript Developer & make an income? I just dropped a FREE ONE hour video training"
      />
      <hr />
    </div>
  );
}

export default SearchPage;
