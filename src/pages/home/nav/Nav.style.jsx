import styled from "styled-components";
import iconHeart from "../../../images/icon/heart.svg"
import iconDofDay from "../../../images/icon/icon-d-of-day.png";
import iconWofWeek from "../../../images/icon/icon-w-of-week.png";
import iconMofMonth from "../../../images/icon/icon-m-of-month.png";

export const Nav = styled.nav`
  padding: 48px 0;
  position: sticky;
  top: 68px;
  z-index: 20;

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
    background: url(${iconHeart}) no-repeat;
  }

  ul li.opened::before {
    background: url(${iconHeart}) no-repeat;
  }

  ul li:hover {
    background-color: var(--bg);
  }

  ul li.opened:hover {
    background-color: var(--bg-2);
  }

  @media (max-width:748px) {
    & {
      padding: 0;
      top:42px;
      margin-bottom: -8px;
    }

    ul {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      gap: 4px;
    }

    ul li {
      width: 80px;
      border-radius: 8px;
      box-shadow: 0 0 4px #00000025;
    }
  }
`