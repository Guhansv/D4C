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
                    <button type="button" class="text-white bg-[#050708]  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-1 text-center inline-flex items-center mr-1.5 mb-2">
                    <li><a><svg class="w-4 h-4 mr-2 -ml-1 inline-flex " aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Signin</a></li>
                    </button>
                </ul>
            </div>
        </nav>
    </div>
  )
}
export default NavBar;