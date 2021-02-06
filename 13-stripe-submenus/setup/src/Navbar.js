import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import {useGlobalContext} from './context'

const Navbar = () => {
  const {openSubmenu,closeSubmenu,openSidebar}= useGlobalContext();
  const diplaySubmenu=(e)=>{
    const text= e.target.textContent;
    const tempBtn= e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right)/2;
    const bottom= tempBtn.bottom-3; 
    openSubmenu(text,{center,bottom});
  }

  const handleSubmenu=(e)=>{
      if(!e.target.classList.contains('link-btn'))
      {
        closeSubmenu();
      }
  }

  return (<>
  <nav className="nav" onMouseOver={handleSubmenu}>
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} className="nav-logo" alt="stripe logo"/>
        <button className="btn toggle-btn" onClick={()=>openSidebar()}>
          <FaBars/>
        </button>
      </div>
      <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={diplaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={diplaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={diplaySubmenu}>
              company
            </button>
          </li>
      </ul>
      <button className="btn signin-btn">Signin</button>
    </div>
  </nav>
  </>)
}

export default Navbar
