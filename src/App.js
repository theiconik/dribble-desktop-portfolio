import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import SinglePost from './components/SinglePost';
import Post from './components/Post';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Switch>
      <Route component={Home} exact path='/'></Route>
      <Route component={About} path='/about'></Route>
      <Route component={SinglePost} path='/post/:slug'></Route>
      <Route component={Post} path='/post'></Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
