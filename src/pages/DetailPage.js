
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DetailPage = () => {
  const { id } = useParams();
  const post = useSelector(state =>
    state.posts.items.find(post => post.id === parseInt(id))
  );

  if (!post) return <p>Post not found.</p>;

  return (
    <div className="detail">
      <h2>Details Page For Post With ID {id}</h2>
      <img src={`https://picsum.photos/200?random=${post.id}`} alt="" />
      <p><strong>User Id:</strong> {post.userId}</p>
      <p><strong>Title:</strong> {post.title}</p>
      <p><strong>Body:</strong> {post.body}</p>
    </div>
  );
};

export default DetailPage;
