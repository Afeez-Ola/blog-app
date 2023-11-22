import React from 'react';
import './styles.css';
import Chip from '../../../common/Chip';

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
  <Chip label={category}></Chip>
   <h3>{title}</h3>
   <p className='blogItem_description'>{description}</p>
  </div>
 );
};

export default BlogItem;
