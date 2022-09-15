import React from "react";
import "./post.css";
import { MdMoreHoriz } from "react-icons/md";
import {Users} from "../../exData"

export default function Post({post}) {

  const user = Users.filter(u=>u.id===1)
  console.log(user)
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
             <img className="postProfileImg" src={Users.filter(u=>u.id===post.userId)[0].profilePicture} /> 
            <span className="postUsername">{Users.filter(u=>u.id===post.userId)[0].username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MdMoreHoriz/>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <div className="postImgContainer">
          <img src={post.photo} alt="" className="postImg" />
          </div>
        </div>
        <div className="postBottom">
          <div className="postBottomLetf">
            <img className="reactionIcon" src="/assets/like.png" alt="" />
            <img className="reactionIcon" src="/assets/heart.png" alt="" />
            <img className="reactionIcon" src="/assets/haha.png" alt="" />
            <span className="postReactionsCounter">{post.like}</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
