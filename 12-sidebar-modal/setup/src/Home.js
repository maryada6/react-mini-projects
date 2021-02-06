import React from 'react'
import { FaBars } from 'react-icons/fa'
import {useGlobalContext} from './context';
const Home = () => {
  const {openModalbar,openSidebar}=useGlobalContext();
  
  return (
     <>
     <main>
       <button className="sidebar-toggle" onClick={()=>openSidebar()}>
        <FaBars/>
       </button>
       <button className="btn" onClick={()=>openModalbar()}>
         Show Modal
       </button>
     </main>
     </>
  );
}

export default Home
