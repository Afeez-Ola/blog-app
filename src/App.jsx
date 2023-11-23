import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Blog from './pages/blog';
import BlogList from './components/home/BlogList';
import { blogList } from './config/data';
import AddBlog from './pages/newBlog';

function App() {
 return (
  <div className='App container'>
   <Routes>
    <Route path='/' Component={Home}></Route>
    <Route path='/blog/:id' Component={Blog}></Route>
    <Route path='/new' Component={AddBlog}></Route>
   </Routes>
  </div>
 );
}

export default App;
