import React from 'react'
import "./friend.css"


export default function Friend({user}) {
    console.log("usuario", user)
  return (
    <li className="sidebarFiend">
            <img className="sideBarFriendImg" src={user.profilePicture} alt=""/>
            <span className="sideBarFriendName">{user.username}</span>
          </li>
  )
}

