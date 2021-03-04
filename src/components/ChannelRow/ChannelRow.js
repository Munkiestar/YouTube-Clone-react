import React from "react";

import "./ChannelRow.scss";
import { Avatar } from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

function ChannelRow({
  image,
  channel,
  description,
  isVerified,
  subs,
  noOfVideos,
}) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" src={image} alt={channel} />
      <div className="channelRow__info">
        <div className="channelRow__title">
          <h3>{channel}</h3>
          {isVerified && (
            <CheckCircleOutlineIcon className="channelRow__icon" />
          )}
        </div>
        <p>
          {subs} subscribers &bull; {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
