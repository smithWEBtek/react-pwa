import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './About';
import Home from './Home';
import Users from './Users';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Button from '@mui/material/Button';
import FormControlSelect from './FormControlSelect';

const selectItems = [
  { id: 1, name: 'small' },
  { id: 2, name: 'medium' },
  { id: 3, name: 'large' },
]

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="primary" variant="dark">
          <Nav className="mr-auto">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/users">Users</Link>
          </Nav>
        </Navbar>
        <Button variant="contained">Hello Select</Button>
        <FormControlSelect items={selectItems}></FormControlSelect>

        <Switch>
          <Route path="/about" component={About}></Route>
          <Route path="/users" component={Users}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
