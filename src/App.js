
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Login from './Login'
import FormSignup from './FormSignup'
import User from './User'
import NotFound from './NotFound'
import EditUser from './users/EditUser'
import Applynewcard from './users/Applynewcard'
import FileUpload from './documentmanagement/FileUpload'
import './App.css';
import AppliedDocument from './Admin/AppliedDocument';
import TrackStatus from './TrackStatus';
import TrackStatusResults from './TrackStatusResults';
import DocumentCorrection from './Admin/DocumentCorrection';
import DocumentVerification from './Admin/DocumentVerification';





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
      <Route exact path="/appliedDocument">
        <AppliedDocument />
      </Route>
      <Route exact path="/TrackStatus">
        <TrackStatus />
      </Route>
      <Route exact path="/TrackStatusResults">
        <TrackStatusResults />
      </Route>
      <Route exact path="/DocumentCorrection">
        <DocumentCorrection />
      </Route>
      <Route exact path="/DocumentVerification">
        <DocumentVerification />
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