import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import Admin from './components/Admin/Admin/Admin';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';

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
       <Route path='/dashboard'>
        <Dashboard></Dashboard>
       </Route>
       <Route path='/admin'>
         <Admin></Admin>
       </Route>
      </Switch>
    </Router>
  );
}

export default App;
