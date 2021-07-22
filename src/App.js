import './App.css';
import {Link,BrowserRouter,Switch,Route} from 'react-router-dom'

import Profile from './components/Profile';
import Myplan from './components/Myplan';
import License from './components/License';
import Billing from './components/Billing';
import React from 'react';

function App() {
  return(
  <div className="main">
    <BrowserRouter>
    <div className="app-main">
    <h2> MY ACCOUNT</h2>
    <p>Logout</p>
    </div>
    <hr/>
    <div className="main-div">

      <Link id="anchor1" to="/profile">Profile</Link>
       <Link id="anchor2" to="/myplan">My Plan </Link>
        <Link id="anchor2" to="/billing">Billing</Link>
        <Link id="anchor2" to="/license">License</Link>
    </div>

<Switch>
<Route path="/profile" component={Profile} exact/>
<Route path="/myplan" component={Myplan} exact/>
<Route path="/billing" component={Billing} exact/>
<Route path="/license" component={License} exact/>

</Switch>
    </BrowserRouter>
    </div>
  );
}
export default App;
