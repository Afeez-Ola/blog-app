import { Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Blog from './pages/blog';

function App() {
 return (
  <div className='App'>
   <Route path='/' Component={Home}></Route>
   <Route path='/blog' Component={Blog}></Route>
  </div>
 );
}

export default App;
