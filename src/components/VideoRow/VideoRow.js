import React from "react";

import "./VideoRow.scss";

function VideoRow({
  views,
  subs,
  description,
  channel,
  timeStamp,
  title,
  image,
}) {
  return (
    <div className="videoRow">
      <img src={image} alt={title} />
      <div className="videoRow__info">
        <h3>{title}</h3>
        <p className="videoRow__headline">
          {channel} &bull; <span> {subs} </span> Subscribers&bull; {views} views
          &bull; {timeStamp}
        </p>
        <p className="videoRow__description">{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;
