import React from 'react'
import './rightBar.css'
import {Users} from "../../exData"
import Online from '../Online/Online'

export default function RightBar({profile}) {
  
  const HomeRightbar=()=>{
    return(
      <>
      <div className="birthdayContainer">
          <img src="/assets/gift.png" className="birthdayImg" alt ="" />
          <span className="birthdayText"><b>Ricardo Lira'</b>s birthday is today </span>
        </div>
        <hr className='rightBarHr' />
        <img src="assets/ad.jpg" alt="" className="rightBarAd" />
        <hr className='rightBarHr'/>
        <h4 className="rightBarTitle">Online Friends</h4>
        <ul className="rightBarFriendList">
        {Users.map(u=>(<Online key= {u.id} user={u}/>))} 
        
        </ul>
      </>
    )
  }

  const ProfileRightbar=()=>{
    return(
      <>
       <h4 className='rightbarTitle' >User Information Title</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City</span>
          <span className="rightbarInfoValue">Buenos Aires</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Caracas</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
        
      </div>
      <h4 className='rightbarTitle' >User Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="/assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rihtbarFollowingName">Juan</span>
        </div>
        <div className="rightbarFollowing">
          <img src="/assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rihtbarFollowingName">Juan</span>
        </div>
        <div className="rightbarFollowing">
          <img src="/assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rihtbarFollowingName">Juan</span>
        </div>
        <div className="rightbarFollowing">
          <img src="/assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rihtbarFollowingName">Juan</span>
        </div>
        <div className="rightbarFollowing">
          <img src="/assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rihtbarFollowingName">Juan</span>
        </div>
        <div className="rightbarFollowing">
          <img src="/assets/person/7.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rihtbarFollowingName">Juan</span>
        </div>
      </div> 
      </>
    )
  }




  return (
    <div className='rightBar'>
      <div className="rightBarWrapper">
      {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}
