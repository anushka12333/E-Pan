
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Login from './Login'
import FormSignup from './FormSignup'
import User from './User'
import NotFound from './NotFound'
import EditUser from './users/EditUser'
// import ViewUser from './users/ViewUser'




function App() {
  
  return (
    <div className="App">
    <Router>
    <Switch>
      <Route exact path="/">
      <FormSignup />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/user">
        <User />
      </Route>
      <Route exact path="/user/edit/:id">
        <EditUser />
      </Route>
      {/* <Route exact path="/user/:id">
        <ViewUser />
      </Route> */}
      <Route component={NotFound}>
        <NotFound />
      </Route>
    </Switch>
    </Router>     


    </div>
  );  
}

export default App;