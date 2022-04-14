
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Login from './Login'
import FormSignup from './FormSignup'
import User from './User'
import NotFound from './NotFound'
import EditUser from './users/EditUser'
import Applynewcard from './users/Applynewcard'
import FileUpload from './documentmanagement/FileUpload'
import './App.css';





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
      <Route exact path="/applynewcard">
        <Applynewcard />
      </Route>
      <Route exact path="/fileUpload">
        <FileUpload />
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