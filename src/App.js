import React, { createContext, useState } from 'react';
import "./App.css";
import Home from "./components/Home/Home";
import { Nav, Navbar} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login/Login";
import Admin from "./components/Admin/Admin";
import Orders from "./components/Orders/Orders";
import Privacy from "./components/Privacy/Privacy";
import Polacy from "./components/Polacy/Polacy";
import CheckOut from "./components/CheckOut/CheckOut";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ManageBook from './components/ManageBook/ManageBook';
import AddBook from './components/AddBook/AddBook';
import EditBook from './components/EditBook/EditBook';
export const UserContext = createContext();


function App(props) {
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
     
    <Router>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand><Link to="/">Book House</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          <Link to="/">Home</Link>
            <Link to="/order">Orders</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/polacy">Polacy</Link>
          </Nav>
          <Nav>
          <Link to="/admin">Admin</Link>
          <Link to="/login">Login</Link>
          {
            <p className="userName">{loggedInUser.name}</p>
            
          }
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>

        <PrivateRoute path="/admin">
          <Admin></Admin>
        </PrivateRoute>

        <PrivateRoute path="/order">
          <Orders></Orders>
        </PrivateRoute>

        <PrivateRoute path="/checkOut/:pdKey">
          <CheckOut></CheckOut>
        </PrivateRoute>

        <Route path="/privacy">
          <Privacy></Privacy>
        </Route>

        <PrivateRoute path="/mangebook">
          <ManageBook></ManageBook>
        </PrivateRoute>
        <PrivateRoute path="/addbook">
          <AddBook></AddBook>
        </PrivateRoute>
        <PrivateRoute path="/editbook">
          <EditBook></EditBook>
        </PrivateRoute>

        <Route path="/polacy">
          <Polacy></Polacy>
        </Route>

        <Route path="/login">
          <Login></Login>
        </Route>

        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
