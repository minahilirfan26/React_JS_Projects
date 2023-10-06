import React, {useRef} from 'react'
import './style.css'

const Navbar = () => {
    const navRef = useRef();
    const showNavBar = ()=>{
        navRef.current.classList.toggle('show')
    }

    
  return (
    <>
    <nav>
        <div className='container'>
          <a href="#" className='brand'>NavBar</a>
          <ul className='nav-menu' ref={navRef}>
            <li><a href="/add">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Subscribe</a></li>
            <li className='login'><a href="#">Login</a></li>
            <li className='signup'><a href="#">Signup</a></li>
            
            <div className='close-btn' onClick={showNavBar} >
                <span className='material-symbols-outlined'>close</span>
                </div>      
          </ul>
        </div>
        <div className='btn-toggle' onClick={showNavBar}>
         <span className='material-symbols-outlined'>sort</span>
        </div>
    </nav>
    </>
  )
}

export default Navbar
