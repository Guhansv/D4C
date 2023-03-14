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
import Apparel from './Apparel';
function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <div className='title-container'><h1 className=' text-4xl justify-center text-white' id='apparels'>See what the hype is about</h1></div>
      <Apparel/>
      <div className='title-container'><h1 className='text-4xl flex justify-center text-white' id='team'>Meet Our Team</h1></div>
      <Sakkthi/> <Guhan/> <Krishna/> <RiteshKum/><RahulK/> <Sachin/>
      <div className='title-container'><h1 className='text-4xl flex justify-center text-white' id='contact'>Reach out to us</h1></div>


    </div>
  )
}
export default App;