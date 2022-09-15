import React from 'react'
import './rightBar.css'
import {Users} from "../../exData"
import Online from '../Online/Online'

export default function RightBar() {
  
  return (
    <div className='rightBar'>
      <div className="rightBarWrapper">
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
      </div>
    </div>
  )
}
