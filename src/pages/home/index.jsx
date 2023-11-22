import React, { useState } from 'react';
import Header from '../../components/home/Header';
import SearchBar from '../../components/home/SearchBar';
import { blogList } from '../../config/data';
import BlogList from '../../components/home/BlogList';

const Home = () => {
 const [blogs, setBlogs] = useState(blogList);
 const [searchValue, setSearchValue] = useState('');

 function handleSearch(e) {
  e.preventDefault();
  setSearchValue(e.target.value);
  setBlogs(
   blogList.filter((blog) =>
    blog.category.toLowerCase().includes(searchValue.toLowerCase()),
   ),
  );
 }

 function clearSearch(e) {
  e.preventDefault();
  setSearchValue('');
  setBlogs(
   blogList.filter((blog) =>
    blog.category.toLowerCase().includes(searchValue.toLowerCase()),
   ),
  );
 }

 return (
  <div>
   <Header></Header>
   <SearchBar
    handleSearch={handleSearch}
    clearSearch={clearSearch}
    value={searchValue}
   ></SearchBar>
   <BlogList blogs={blogs}></BlogList>
  </div>
 );
};

export default Home;
