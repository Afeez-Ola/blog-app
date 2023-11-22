import React from 'react';
import './styles.css';

const BlogItem = ({
 blog: {
  id,
  title,
  description,
  createdAt,
  authorName,
  authorAvatar,
  category,
  cover
 },
}) => {
 return (
  <div className='blogItem_wrapper'>
  <img src={cover}></img>
   <h1>Blog Item </h1>
  </div>
 );
};

export default BlogItem;
