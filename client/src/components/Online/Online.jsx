import React from 'react'
import "./online.css"


export default function Online(user) {

  return (
    <li className="rightBarFriend">
            <div className="rightBarProfileImgContainer">
              <img src={user.user.profilePicture} alt="" className="rightBarProfileImg" />
              <span className="rightBarOnline"></span>
            </div>
            <span className="rightBarUsername">{user.user.username}</span>
          </li>
  )
}

