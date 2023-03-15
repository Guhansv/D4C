import React from 'react'
import NavBar from './NavBar';
import "../index.css";
import Home from './Home';
import Team from './Team';
import Apparel from './Apparels/Apparel';
import Contact from './Contact';
function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <Apparel/>
      <Team/>
      <Contact/>
    </div>
  )
}
export default App;