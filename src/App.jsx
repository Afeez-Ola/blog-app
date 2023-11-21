import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Blog from './pages/blog';

function App() {
 return (
  <div className='App'>
   <Routes>
    <Route path='/' Component={Home}></Route>
    <Route path='/blog' Component={Blog}></Route>
   </Routes>
  </div>
 );
}

export default App;
