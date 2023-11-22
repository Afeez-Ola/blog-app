import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Blog from './pages/blog';
import BlogList from './components/home/BlogList';
import { blogList } from './config/data';

function App() {
 return (
  <div className='App container'>
   <Routes>
    <Route path='/' Component={Home}></Route>
    <Route path='/blog/:id' Component={Blog}></Route>
   </Routes>
   <BlogList blogs={blogList}></BlogList>
  </div>
 );
}

export default App;
