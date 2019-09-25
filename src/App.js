import React from 'react';
import './App.css';
import Home from './pages/Home'
import Error from './pages/Error.js'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import {Links,Switch,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
function App() {
  return (
  <>
<Navbar/>
  <Switch>

    <Route path='/' exact component={Home} />
   <Route exact path='/rooms' component={Rooms} />
   <Route path='/rooms/:id' component={SingleRoom}/>
    <Route component={Error} />

  </Switch>
  
   

  </>
  );
}

export default App;
