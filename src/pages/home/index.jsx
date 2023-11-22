import React, { useState } from 'react';
import Header from '../../components/home/Header';
import SearchBar from '../../components/home/SearchBar';
import { blogList } from '../../config/data';
import BlogList from '../../components/home/BlogList';

const Home = () => {
 const [blogs, setBlogs] = useState(blogList);

 function handleSearch(e) {
    e.preventDefault()
  const searchValue = e.target.value;
  setBlogs(
   blogList.filter((blog) =>
    blog.category.toLowerCase().includes(searchValue.toLowerCase()),
   ),
  );
 }

 return (
  <div>
   <Header></Header>
   <SearchBar handleSearch={handleSearch}></SearchBar>
   <BlogList blogs={blogs}></BlogList>
  </div>
 );
};

export default Home;
