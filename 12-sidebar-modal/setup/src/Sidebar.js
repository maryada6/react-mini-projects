import React from 'react'
import logo from './logo.svg'
import {useGlobalContext} from './context';
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'

const Sidebar = () => {
  const {isSidebarOpen,closeSidebar}= useGlobalContext();

  return (<>
    <aside className={`sidebar ${isSidebarOpen && "show-sidebar"}`}>
      <div className="sidebar-header">
        <img src={logo} className="logo" alt="logo"/>
        <button className="close-btn" onClick={()=> closeSidebar()}>
          <FaTimes/>
        </button>
        </div>
            <ul className="links" >
                {links.map((link)=> <li key={link.id}><a href={link.url}>{link.icon}{link.text}</a></li>  )}
            </ul>

            <ul className="social-icons">
            {social.map((link)=> <li key={link.id}><a href={link.url}>
              {link.icon}
              </a>
              </li>  )}
        </ul>
    </aside>
  </>)
}

export default Sidebar
