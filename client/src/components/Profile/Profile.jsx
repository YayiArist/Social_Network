import React from 'react'
import "./profile.css"
import TopBar from "../TopBar/TopBar"
import SideBar from "../SideBar/SideBar"
import Feed from "../Feed/Feed"
import RightBar from "../RightBar/RightBar"

export default function Profile() {
  return (
    <>
      <TopBar />
      <div className="profile">
        <SideBar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/person/7.jpeg"
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Yairys</h4>
                <span className="profileInfoDesc">Hello there!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <RightBar profile/>
          </div>
        </div>
      </div>
    </>
  )
}
