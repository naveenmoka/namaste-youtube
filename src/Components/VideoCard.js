import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-5 w-72 shadow-lg">
      <img className="rounded-lg" alt="video" src={thumbnails.medium.url} />
      <ul>
        <li>{title}</li>
        <li>{channelTitle} </li>
        <li>{statistics.viewCount} views </li>
      </ul>
    </div>
  );
};

export default VideoCard;
