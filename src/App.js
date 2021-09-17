import './App.css';
import React,{ Suspense, useState } from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
// import Home from './pages/Home/Home';
// import Login from './pages/Login/Login';
import {AppContext} from './context/AppContext';
import Loading from './components/Loading/Loading'
const Home = React.lazy(()=> import('./pages/Home/Home') )
const Login = React.lazy(()=> import('./pages/Login/Login') )

function App() {
  const [status,setStatus] = useState(false)
  const [scrollNav, setScrollNav] = useState(false)

  return (
    <div className="App">
      <AppContext.Provider value={{status,setStatus,scrollNav,setScrollNav}} >  
        <Router>
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route path="/admin" >
                <Login />
              </Route>
              <Route path="/" >
                <Home />
              </Route>
            </Switch>
          </Suspense>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
