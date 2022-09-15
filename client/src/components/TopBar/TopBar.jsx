import React from "react";
import "./topBar.css";
import { BiSearchAlt2 } from "react-icons/bi";
import {
  BsFillPersonFill,
  BsFillChatSquareTextFill,
  BsBellFill,
} from "react-icons/bs";

export default function TopBar() {
  return (
    <div className="topBarContainer">
      <div className="topBarLeft">
        <span className="logo">YaiSocial</span>
      </div>
      <div className="topBarCenter">
        <div className="searchBar">
          <BiSearchAlt2 className="searchIcon" />
          <input
            placeholder="Search something"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topBarRight">
        <div className="topBarLinks">
          <span className="topBarLink">HomePage</span>
          <span className="topBarLink">Timeline</span>
        </div>
        <div className="topBarIcons">
          <div className="topBarIconItem">
            <BsFillPersonFill />
            <span className="topBarIconBadge">1</span>
          </div>
          <div className="topBarIconItem">
            <BsFillPersonFill />
            <span className="topBarIconBadge">2</span>
          </div>
          <div className="topBarIconItem">
            <BsBellFill />
            <span className="topBarIconBadge">1</span>
          </div>
        </div>
        <img src="assets/person/yo.jpeg" alt="" className="topBarImg" />
      </div>
    </div>
  );
}
