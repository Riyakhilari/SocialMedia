
import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  const shortTitle = post.title.length > 20 ? post.title.slice(0, 20) + '...' : post.title;
  const shortBody = post.body.length > 50 ? post.body.slice(0, 50) + '...' : post.body;

  return (
    <Link to={`/item/${post.id}`} className="card">
      <img src={`https://picsum.photos/200?random=${post.id}`} alt="Post" />
      <p><strong>User ID:</strong> {post.userId}</p>
      <p><strong>Title:</strong> {shortTitle}</p>
      <p><strong>Body:</strong> {shortBody} Read More...</p>
    </Link>
  );
};

export default PostCard;
