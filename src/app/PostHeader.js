import React from 'react';

const PostHeader = ({ post }) => (
  <div className="post-header">
    <img src={post.image} alt="foto de perfil" className="img-header" />
    <div className="title">
      {post.name}
      <span>{post.date}</span>
    </div>
  </div>
);

export default PostHeader;
