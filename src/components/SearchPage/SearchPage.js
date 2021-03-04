import React from "react";
import "./SearchPage.scss";

import ChannelRow from "../ChannelRow/ChannelRow";
import VideoRow from "../VideoRow/VideoRow";

import TuneIcon from "@material-ui/icons/Tune";

function SearchPage() {
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

      <VideoRow
        views="1.4M"
        subs="12K"
        description="Do you want money..."
        timeStamp="59 second ago"
        channel="Ahmad Zaky"
        title="Get a job with code"
        image="https://i.ytimg.com/vi/pJHXpPp-Qis/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDQyvA5FOOiDfoNA9P_hTVQUcp2Ew"
      />

      <VideoRow
        views="61K"
        subs="12.6K"
        description="Hi people with the spirit of learning, pada kali ini kita akan belajar apa itu fiverr dan kenapa kita bisa menggunakan platform ..."
        timeStamp="1 years ago"
        channel="BuildWith Angga"
        title="Belajar Fiverr Langsung Dari Mentor Expert — Eps. 3"
        image="https://i.ytimg.com/vi/GmvdZ4lUHnY/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBa6YYEVUIttQ0K1r85uUMRzumIxQ"
      />

      <VideoRow
        views="24K"
        subs="307K"
        description="Angga Risky"
        timeStamp="2 years ago"
        channel="Web Programming UNPAS"
        title="DROP OUT KULIAH BISA SUKSES ? | Feat. Angga Risky"
        image="https://i.ytimg.com/vi/Dy1AhCJLmqI/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBbo9AYDA4eA7wlmG0Az8q2oX0bCQ"
      />

      <VideoRow
        views="3.1M"
        subs="1.23M"
        description="Watch this JavaScript tutorial for beginners to learn JavaScript basics in one hour. 🔥Get my Complete JavaScript Course with a..."
        timeStamp="2 years ago"
        channel="Programming with Mosh"
        title="JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour [2020]"
        image="https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCE3fbsB0deZPlgm79U9HlO8DG-0A"
      />

      <VideoRow
        views="2.4M"
        subs="1.23M"
        description="React Tutorial - Learn to build fast web apps with React (React js) from scratch. 🔥Get the complete React course: ..."
        timeStamp="2 years ago"
        channel="Programming with Mosh"
        title="React Tutorial for Beginners [React js]"
        image="https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBIQ5WzXVRH8bb9tiV5khu2jAe4HA"
      />

      <VideoRow
        views="2M"
        subs="2.37M"
        description="Learn the basics of HTML5 and web development in this awesome course for beginners. ⭐️ Contents ⭐️ ⌨️ (0:00:00) ..."
        timeStamp="1 years ago"
        channel="freeCodeCamp.org"
        title="HTML Full Course - Build a Website Tutorial"
        image="https://i.ytimg.com/vi/pQN-pnXPaVg/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDSHd4tgm81VMHWtFRnQJDAe-K3Bg"
      />
    </div>
  );
}

export default SearchPage;
