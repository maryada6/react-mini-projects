import React, { useState, useContext } from 'react'

const AppContext= React.createContext();
export const AppProvider =({children})=>{

    const [isSidebarOpen,setISSidebarOpen]=useState(false);
    const [isModalOpen,setIsModalOpen]=useState(false);

    const openSidebar=()=>{
        setISSidebarOpen(true);
    }
    
    const openModalbar=()=>{
        setIsModalOpen(true);
    }

    const closeSidebar=()=>{
        setISSidebarOpen(false);
    }

    const closeModalbar=()=>{
        setIsModalOpen(false);
    }

    
    return <AppContext.Provider value={{openModalbar,openSidebar,closeModalbar,closeSidebar,isModalOpen,isSidebarOpen}}>{children}</AppContext.Provider>;
}

export const useGlobalContext =()=>{
    return useContext(AppContext);
}