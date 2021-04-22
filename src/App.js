
import logo from './logo.svg';
import './App.css';
import React from 'react';
import Main from './components/Main';
import Author from './components/Author';
import Editor from './components/Editor';
import Article from './components/Article';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { createBrowserHistory } from "history";


const history = createBrowserHistory();
 
function App() {
  const [token, setToken] = React.useState(0);
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route path='/users/:pk/' exact={true}><Author token={token} setToken={setToken} exact={true}/></Route>
          <Route path='/editor/:pk/' exact={true}><Editor token={token} setToken={setToken} exact={true}/></Route>
          <Route path='/articles/:pk/' exact={true}><Article token={token} setToken={setToken} exact={true}/></Route>
          <Route path='/' exact={true}><Main token={token} setToken={setToken}/></Route>
        </Switch>
      </div>
      
    </Router>
    );
}

export default App;

/*
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

     
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}
*/