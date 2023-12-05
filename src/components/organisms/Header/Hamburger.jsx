import React from 'react'
import styled from 'styled-components'

const DivHamburger = styled.div`
  #hamburger {
    width: 40px;
    height: 40px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  #hamburger div {
    width: 100%;
    height: 2px;
    border-radius: 4px;
    background-color: var(--icon);
    transition: all 0.3s;
  }
  /* hover */
  #hamburger:hover div:first-child{
    transform: rotate(45deg);
  }

  #hamburger:hover div:nth-child(2){
    transform: translate(-1em);
  }

  #hamburger:hover div:nth-child(3){
    transform: rotate(-45deg);
  }
  /* active */
  #hamburger:active div:first-child{
    transform: translate(0.5em) rotate(45deg) ;
  }

  #hamburger:active div:nth-child(2){
    transform: translate(-0.5em) ;
  }

  #hamburger:active div:nth-child(3){
    transform: translate(0.5em) rotate(-45deg) ;
  }

  /* opened */
  /* opened:hover */
  #hamburger.opened:hover div:first-child{
    transform: translate(-1em) rotate(-45deg) ;
  }

  #hamburger.opened:hover div:nth-child(2){
    transform: translate(0) ;
  }

  #hamburger.opened:hover div:nth-child(3){
    transform: translate(-1em) rotate(45deg) ;
  }
  /* opened:active */
  #hamburger.opened:active div:first-child{
    transform: translate(-1.5em) rotate(-45deg) ;
  }

  #hamburger.opened:active div:nth-child(2){
    transform: translate(-0.5em) ;
  }

  #hamburger.opened:active div:nth-child(3){
    transform: translate(-1.5em) rotate(45deg) ;
  }
`

export default function Hamburger({ isMenuOpen, handleMenu }) {
  return (
    <DivHamburger>
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
    </DivHamburger>
  )
}
