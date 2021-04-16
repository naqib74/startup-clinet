import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import Review from './components/Home/Review/Review';
import Admin from './components/Admin/Admin/Admin';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
       <Route path='/login'>
         <Login></Login>
       </Route>
       <Route path='/review'>
         <Review></Review>
       </Route>
       <Route path='/admin/service'>
         <Admin></Admin>
       </Route>
      </Switch>
    </Router>
  );
}

export default App;
