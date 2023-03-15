import React from 'react'
import Socks from './Socks';
import Tees from './Tees';
import Shirts from './Shirts';
function Apparel() {
  return (
    <div>
    <div className='title-container'><h1 className='text-4xl flex justify-center text-white' id='contact'>See what the hype is about</h1></div>  
    <div className='apparel-container'>
    <Shirts/>
    <Socks/>
    <Tees/>
</div>
</div>
    
  )
}
export default Apparel;