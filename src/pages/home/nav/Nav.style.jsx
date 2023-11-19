import styled from "styled-components";

export const Nav = styled.nav`
  padding: 48px 0;
  position: sticky;
  top: 32px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 8px;

    font-size: 16px;
  }

  ul li {
    cursor: pointer;
    color: var(--medium);
    background: var(--bg-4);
    padding: 8px 24px 8px 16px;
    border-radius: 8px 0 0 8px;
    transition: all 0.2s;
  }

  ul li.opened {
    color: var(--em);
    background: var(--bg-2);
    font-weight: bold;
  }

  ul li::before {
    content: '';
    display: inline-block;
    width: 32px;
    height: 32px;
    vertical-align: -0.6em;
    background: url("../images/icon/heart_60.svg") ;
  }

  ul li.opened::before {
    background: url("../images/icon/heart.svg") ;
  }

  ul li:hover {
    background-color: var(--bg);
  }

  ul li.opened:hover {
    background-color: var(--bg-2);
  }
`