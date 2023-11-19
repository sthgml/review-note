import styled from "styled-components";

export const Ul = styled.ul`
  position: absolute;
  width: 240px;
  height: 100vh;
  background: var(--bg-4);
  transition: all 0.5s;
  z-index: 20;
  left: -240px;
  top: 70px;
  
  &.opened {
    display: block;
    position: fixed;
    transform: translateX(240px);
    transition: all 0.5s;
  }
  
  li{
    width: 100%;
    padding: 32px;
  }
`
