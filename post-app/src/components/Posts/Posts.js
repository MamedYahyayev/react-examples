import React from "react";
import { BsBookmarkCheck } from "react-icons/bs";
import "./Posts.css";

const Posts = ({ post }) => {
  return (
    <div className="post">
      <div className="post__header">
        <h1>{post.name}</h1>
      </div>

      <div className="post__image">
        <img src={post.postImage} alt="postimage" />
      </div>

      <div className="post__footer">
        <div className="post__footer-detail">
          <img src={post.authorImage} alt="person" />
          <p>{post.author}</p>
          <p>{post.postDate}</p>
          <BsBookmarkCheck />
        </div>
        <div className="post__footer-tags">
          {post.tags.map((tag) => (
            <button>{tag}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;
