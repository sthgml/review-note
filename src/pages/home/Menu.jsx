import React, { useEffect, useRef } from 'react'

export default function Menu({ isMenuOpen, setIsMenuOpen }) {
  
  const handleClose = () => {
    setIsMenuOpen(false);
  }

  return (
    <>
      <ul className={`paper-list ${isMenuOpen ? 'opened' : ''}`}>
            <li> 
              <button className='btn-settings' type='button' onClick={handleClose}>추후 개발 예정</button> 
            </li>
        </ul>
    </>
  )
}
