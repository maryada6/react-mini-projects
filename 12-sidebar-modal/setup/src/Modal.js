import React from 'react'
import {useGlobalContext} from './context';
import { FaTimes } from 'react-icons/fa'
const Modal = () => {
      const {isModalOpen,closeModalbar}= useGlobalContext();
      
      return (<>
     <div className={`modal-overlay ${isModalOpen && "show-modal"}`}>
      <div className="modal-container">
          <h3>modal content</h3>
          <button className="close-modal-btn" onClick={()=>closeModalbar()}>
            <FaTimes/>
          </button>
      </div>
     </div>
  </>)
}

export default Modal
