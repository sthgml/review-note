import styled from "styled-components";
import logoSm from "../../../images/당장복습헤_logo 1.png";
import logoXs from "../../../images/logo-xs.png";

export const Header = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  border-bottom: 2px solid var(--bg);
  background-color: var(--bg-3, #263140);
  z-index: 30;

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

  .logo-sm {
    width: 135px;
    height: 32px;
    margin: 8px;
    background: url(${logoSm}) no-repeat;
    background-size: contain;
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

  [class^="text"] {
    color: var(--em);
  }

  [class^="link"] {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  @media (max-width: 475px) {
    .logo-sm {
      width: 32px;
      padding: 4px;
      box-sizing: border-box;
      background: url(${logoXs}) no-repeat;
      background-size: contain;
    }

    .info {
      gap: 4px;
    }

    .text-logout {
      display: none;
    }
  }
`