import React from 'react'

export default function Hamburger({ handleMenu }) {
  return (
    <button 
    type="button" 
    id="hamburger" 
    className={`menu-btn 
    ${isMenuOpen ? 'opened' : ''}`} 
    onClick={handleMenu}>
        <div></div>
        <div></div>
        <div></div>
    </button>
  )
}
