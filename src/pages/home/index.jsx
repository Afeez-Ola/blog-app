import React from 'react';
import Header from '../../components/home/Header';
import SearchBar from '../../components/home/SearchBar';
import { blogList } from './config/data';

const Home = () => {
 return (
  <div>
   <Header></Header>
   <SearchBar></SearchBar>
   <BlogList blogs={blogList}></BlogList>
  </div>
 );
};

export default Home;
