import React from "react";
import "./sideBar.css";
import { MdRssFeed } from "react-icons/md";
import { HiChatAlt} from "react-icons/hi";
import { BsPlayBtnFill, BsBookmarkHeartFill, BsQuestionCircleFill, BsBriefcase } from "react-icons/bs";
import { ImUsers } from "react-icons/im";
import { RiCalendarEventFill } from "react-icons/ri";
import { BiJoystick } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa"

export default function SideBar() {
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <ul className="sideBarList">
          <li className="sideBarListItem">
            <MdRssFeed className="sideBarIcon"/>
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sideBarListItem">
            <HiChatAlt className="sideBarIcon"/>
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sideBarListItem">
            <BsPlayBtnFill className="sideBarIcon"/>
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sideBarListItem">
            <ImUsers className="sideBarIcon"/>
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sideBarListItem">
            <BiJoystick className="sideBarIcon"/>
            <span className="sidebarListItemText">Games</span>
          </li>
          <li className="sideBarListItem">
            <BsQuestionCircleFill  className="sideBarIcon"/>
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sideBarListItem">
            <BsBriefcase className="sideBarIcon"/>
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sideBarListItem">
            <RiCalendarEventFill className="sideBarIcon"/>
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sideBarListItem">
            <FaGraduationCap className="sideBarIcon"/>
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sideBarButton">See More</button>
        <hr className="sideBarHr"/>
        <ul className="sideBarFriendList">
          <li className="sidebarFiend">
            <img className="sideBarFriendImg" src="/assets/person/2.jpeg" alt=""/>
            <span className="sideBarFriendName">Amigo 1</span>
          </li>
          <li className="sidebarFiend">
            <img className="sideBarFriendImg" src="/assets/person/2.jpeg" alt=""/>
            <span className="sideBarFriendName">Amigo 1</span>
          </li>
          <li className="sidebarFiend">
            <img className="sideBarFriendImg" src="/assets/person/2.jpeg" alt=""/>
            <span className="sideBarFriendName">Amigo 1</span>
          </li>
          <li className="sidebarFiend">
            <img className="sideBarFriendImg" src="/assets/person/2.jpeg" alt=""/>
            <span className="sideBarFriendName">Amigo 1</span>
          </li>
          <li className="sidebarFiend">
            <img className="sideBarFriendImg" src="/assets/person/2.jpeg" alt=""/>
            <span className="sideBarFriendName">Amigo 1</span>
          </li>
          <li className="sidebarFiend">
            <img className="sideBarFriendImg" src="/assets/person/2.jpeg" alt=""/>
            <span className="sideBarFriendName">Amigo 1</span>
          </li>
          <li className="sidebarFiend">
            <img className="sideBarFriendImg" src="/assets/person/2.jpeg" alt=""/>
            <span className="sideBarFriendName">Amigo 1</span>
          </li>
          <li className="sidebarFiend">
            <img className="sideBarFriendImg" src="/assets/person/2.jpeg" alt=""/>
            <span className="sideBarFriendName">Amigo 1</span>
          </li>
          <li className="sidebarFiend">
            <img className="sideBarFriendImg" src="/assets/person/2.jpeg" alt=""/>
            <span className="sideBarFriendName">Amigo 1</span>
          </li>
          <li className="sidebarFiend">
            <img className="sideBarFriendImg" src="/assets/person/2.jpeg" alt=""/>
            <span className="sideBarFriendName">Amigo 1</span>
          </li>
          <li className="sidebarFiend">
            <img className="sideBarFriendImg" src="/assets/person/2.jpeg" alt=""/>
            <span className="sideBarFriendName">Amigo 1</span>
          </li>
          <li className="sidebarFiend">
            <img className="sideBarFriendImg" src="/assets/person/2.jpeg" alt=""/>
            <span className="sideBarFriendName">Amigo 1</span>
          </li>
          <li className="sidebarFiend">
            <img className="sideBarFriendImg" src="/assets/person/2.jpeg" alt=""/>
            <span className="sideBarFriendName">Amigo 1</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
