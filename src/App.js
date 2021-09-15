import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/Home/Home';
import Login from './pages/Login/Login'
function App() {
  
  return (
    <div class="App">
      <Router>
        <Switch>
          <Route path="/admin" >
            <Login />
          </Route>
          <Route path="/" >
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
