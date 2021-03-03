import React from "react";

import "./VideoCard.scss";

import Avatar from "@material-ui/core/Avatar";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

function VideoCard({
  image,
  title,
  channel,
  avatar,
  views,
  timeStamp,
  isVerified,
}) {
  return (
    <div className="videoCard">
      <img className="videoCard__thumbnail" src={image} alt={title} />

      <div className="videoCard__info">
        <Avatar className="videoCard__avatar" src={avatar} alt={channel} />

        <div className="videoCard__text">
          <h3>{title}</h3>
          <div className="videoCard__flex">
            <p>{channel}</p>
            {/*  show Verified icon  */}
            {isVerified && <CheckCircleIcon className="videoCard__checked" />}
          </div>
          <p>
            {views} &bull; {timeStamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
