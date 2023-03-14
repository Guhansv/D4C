import React,{useRef} from 'react'
import Logo from '../assets/logo.svg';

 function NavBar() {
  const hamref = useRef()
  function hamburger(){
    hamref.current.classList.toggle("active")
  }
  return (
    <div className='d-nav '>
      <nav className="navbar" id='home'>
            <div className="brand-title"><img src={Logo} alt='Brand-Logo'/></div>
            <a className="toggle-button" onClick={hamburger}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              
            </a>
            <div class="nav-links" ref={hamref}>
                <ul>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#apparels'>Apparels</a></li>
                    <li><a href='#team'>Team</a></li>
                    <li><a href='#contact'>Contact</a></li>
                    <li><a className=''>Signup</a></li>
                </ul>
            </div>
        </nav>
    </div>
  )
}
export default NavBar;