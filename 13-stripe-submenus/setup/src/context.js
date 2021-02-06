import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext= React.createContext();
export const AppProvider=({children})=>
{
    const [isSidebarOpen,setIsSidebarOpen]=useState(false);
    const [isSubmenuOpen,setIsSubmenuOpen]=useState(false);
    const [location,setLocation]=useState({});
    const [page,setPage]=useState({page:'',links:[]})
    const openSidebar=()=> setIsSidebarOpen(true);
    const openSubmenu=(text,coordinates)=> 
    {   setPage(sublinks.find((link)=>link.page===text));
        setLocation(coordinates);
        setIsSubmenuOpen(true);}
    const closeSubmenu=()=> setIsSubmenuOpen(false);
    const closeSidebar=()=> setIsSidebarOpen(false);

    return <AppContext.Provider value={{page,location,isSubmenuOpen,isSidebarOpen,openSubmenu,openSidebar,closeSubmenu,closeSidebar}}>{children}</AppContext.Provider>
}

export const  useGlobalContext=()=> useContext(AppContext);