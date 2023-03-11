import React from 'react'
import NavBar from './NavBar';
import "../index.css";
import Home from './Home';
import Sakkthi from './Team/Sakkthi';
import Guhan from './Team/Guhan';
import Krishna from './Team/Krishna';
import RiteshKum from './Team/Ritesh';
import RahulK from './Team/RahulK';
import Sachin from './Team/Sachin';
function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <div className='title-container'><h1 className='team-h1'>Meet Our Team</h1></div>
      <Sakkthi/> <Guhan/> <Krishna/> <RiteshKum/><RahulK/> <Sachin/>
    </div>
  )
}
export default App;