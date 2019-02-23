import React, { Component } from 'react';
import { BrowserRouter, Link, Route,Switch } from 'react-router-dom'
import Register from './components/user/Register'
import Login from './components/user/Login'
import ContactList from './components/contact/contactlist'
import ContactNew from './components/contact/ContactNew'
import ContactShow from './components/contact/ContactShow'
import ContactEdit from './components/contact/ContactEdit'
class App extends Component {
  render() { 
    return ( 
      <BrowserRouter>
        <div>
          <h2>Contact Manager App</h2>
          <Link to="/users/register">Register</Link>|
        <Link to="/users/login">Login</Link>| 
          <Link to='/contacts'>Contacts</Link>

<Switch>
        <Route path="/users/login" component={Login}/>
          <Route path="/users/register" component={Register} />
          <Route path='/contacts' component={ContactList} exact={true} />
          <Route path='/contacts/new' component={ContactNew} exact={true} />
            <Route path='/contacts/:id' component={ContactShow} exact={true} />
            <Route path='/contacts/edit/:id' component={ContactEdit} exact={true} />
          </Switch>
        </div>
        </BrowserRouter>
    )
  }
}

export default App;
