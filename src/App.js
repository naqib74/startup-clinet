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
import { createContext, useState } from 'react';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';

export const UserContext =createContext()
function App() {
  const [loggedInUser , setLoggedInUser] =useState({})
  return (
    <UserContext.Provider value ={[loggedInUser , setLoggedInUser]}>
      <p>Name:{loggedInUser.name}</p>
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
       <PrivateRoute path='/dashboard'>
        <Dashboard></Dashboard>
       </PrivateRoute>
       <PrivateRoute path='/admin'>
         <Admin></Admin>
       </PrivateRoute>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
