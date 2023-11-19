import React, { useEffect, useRef } from 'react';
import * as M from "./Menu.style.jsx"

export default function Menu({ isMenuOpen, setIsMenuOpen }) {
  
  const handleClose = () => {
    setIsMenuOpen(false);
  }

  return (
    <>
      <M.Ul className={`paper-list ${isMenuOpen ? 'opened' : ''}`}>
            <li> 
              <button className='btn-settings' type='button' onClick={handleClose}>추후 개발 예정</button> 
            </li>
        </M.Ul>
    </>
  )
}
