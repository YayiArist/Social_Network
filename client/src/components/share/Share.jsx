import React from "react";
import "./share.css";
import {  MdInsertPhoto, MdOutlineVideoCameraFront} from "react-icons/md";


export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="assets/person/yo.jpeg" alt="" />
          <input
            placeholder="What's on your mind, Yairys?"
            className="shareInput"
          />
         <button className="shareButton">Post</button>
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <MdOutlineVideoCameraFront className="shareIconLiveChat" />
              <span className="shareOptionText">LiveChat</span>
            </div>
            <div className="shareOption">
              < MdInsertPhoto className="shareIconPhotho" />
              <span className="shareOptionText">Photo/Video</span>
            </div>
            <div className="shareOption">
              < MdInsertPhoto className="shareIcon" />
              <span className="shareOptionText">Photo Or Video</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
