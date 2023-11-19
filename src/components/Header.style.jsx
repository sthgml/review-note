import styled from "styled-components";

export const Header = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  border-bottom: 2px solid var(--bg);
  background-color: var(--bg-3, #263140);
  z-index: 10;

  .container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 0 16px
  }

  .info,
  .welcome-text,
  .logout,
  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .left-header {
    display: flex;
    align-items: center;
  }

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

  .logo-sm {
    width: 135px
  }

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .info {
    gap: 24px;
  }

  .welcome-text::after {
    content: '|';
    margin-left: 24px;
  }

  .logout {
    gap: 4px;
  }

  .icon-logout {
    width: 32px;
  }

  .text-logout {
    color: var(--em);
  }

`