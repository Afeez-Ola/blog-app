import React from 'react';
import './styles.css';
import Chip from '../../../common/Chip';
import { Link } from 'react-router-dom';

const BlogItem = ({
 blog: {
  id,
  title,
  description,
  createdAt,
  authorName,
  authorAvatar,
  category,
  cover,
 },
}) => {
 return (
  <div className='blogItem_wrapper'>
   <img className='blogItem_cover' src={cover}></img>
   <Chip label={category}></Chip>
   <h3>{title}</h3>
   <p className='blogItem_description'>{description}</p>
   <footer>
    <div className='blogItem_author'>
     <img src={authorAvatar} alt='Author Avatar'></img>
     <div>
      <h6>{authorName}</h6>
      <p>{createdAt}</p>
     </div>
    </div>
    <Link to={`/blog/${id}`}> ➝ </Link>
   </footer>
  </div>
 );
};

export default BlogItem;
