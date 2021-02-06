import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title, info}) => {
  const [infoflag,setInfoFlag]=useState(false);
  return <article className="question">
      <header>
      <h4 className="title">{title}</h4>
      <button onClick={()=> setInfoFlag(!infoflag)} className="btn">{infoflag ? <AiOutlineMinus/> : <AiOutlinePlus/>}</button>
       </header>
      <p>{infoflag? info : ""}</p>
  </article>
};

export default Question;
