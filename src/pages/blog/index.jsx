import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { blogList } from '../../config/data';
import { Link } from 'react-router-dom';
import Chip from '../../components/common/Chip';
import './styles.css';
import EmptyList from '../../components/common/EmptyList';

const Blog = () => {
 const { id } = useParams();

 const [blog, setBlog] = useState(null);

 useEffect(() => {
  const blog = blogList.find((blog) => blog.id === parseInt(id));
  setBlog(blog);
 }, []);
 return (
  <>
   <Link className='blog-goBack' to='/'>
    <span> &#8592;</span> <span>Go Back</span>
   </Link>
   {blog ? (
    <div className='blog-wrap'>
     <header>
      <p className='blog-date'>Published {blog.createdAt}</p>
      <h1>{blog.title}</h1>
      <div className='blog-subCategory'>
       {blog.subCategory.map((category, i) => (
        <div key={i}>
         <Chip label={category} />
        </div>
       ))}
      </div>
     </header>
     <img src={blog.cover} alt='cover' />
     <p className='blog-desc'>{blog.description}</p>
    </div>
   ) : (
    <EmptyList />
   )}
  </>
 );
};

export default Blog;
