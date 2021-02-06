import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const initialState={cart: cartItems,loading:false,total:0,amount:0 ,};

const AppProvider = ({ children }) => {
  const [state , dispatch] = useReducer(reducer ,initialState);
 const clearCart=()=>{
  dispatch({type:'CLEAR_CART'});
}
const removeItem=(id)=>
{
  dispatch({type:'REMOVE_ITEM',id:id});
}
const changeAmount=({id,change})=>
{
  
  dispatch({type:'AMOUNT',id:id,change:change});
}

const fetchData= async()=>{
  dispatch({type:"LOADING"})
  const response = await fetch(url);
  const cart = await response.json();
  dispatch({type:"DISPLAY",cart:cart})
}

useEffect(()=>{
  fetchData();
},[]);

useEffect(()=>{
  dispatch({type:"CHANGE_STATE"});
},[state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,clearCart,removeItem,changeAmount
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
