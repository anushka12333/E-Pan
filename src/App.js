
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Login from './Login'
import FormSignup from './FormSignup'


function App() {
  return (
    <div className="App">
    <Router>
    <Switch>
      <Route exact path="/">
      <FormSignup />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
    </Router>
      


    </div>
  );  
}

export default App;