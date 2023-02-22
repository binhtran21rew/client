import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MasterLayout from './layouts/admin/MasterLayout';
import Home from './components/frondend/Home'
import Login  from './components/frondend/auth/Login';
import Register from './components/frondend/auth/Register';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8000/"
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.post['Accept'] = '*/*'
axios.defaults.withCredentials = true;


function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>

                <Route path="/admin" name="Admin"  render={(props) => <MasterLayout {...props}/>} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
