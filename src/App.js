import React, { useEffect, useState } from 'react';
import './App.css';
import UsersList from './components/UsersList/UsersList';
import NotFound from './components/NotFound/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserDetails from './components/UserDetails/UserDetails';

function App() {

  const [users, setUsers] = useState([]);

  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/"> <UsersList users={users}></UsersList> </Route>
          <Route path="/users"> <UsersList users={users}></UsersList> </Route>
          <Route path="/user/:id"> <UserDetails></UserDetails> </Route>
          <Route path="*"> <NotFound></NotFound> </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
