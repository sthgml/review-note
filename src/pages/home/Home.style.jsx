import styled from "styled-components";
import quoteStart from "../../images/quote-start.png";
import quoteEnd from "../../images/quote-end.png"

export const HomeWrapper = styled.div`
  display: flex;
  position: relative;

  main {
      display: flex;
      margin: 0 auto;
      margin-top: 32px;
      align-items: flex-start;
    }

  @media (max-width:748px) {
    main {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      margin-top: 12px;
    }

    section.old {
      margin-top: 0;
    }
  } 
`

export const Old = styled.section`
  max-width: 100%;
  width: fit-content;
  margin: auto;
  padding: 32px 48px;
  background: var(--bg-2);
  border-radius: 16px;
    
  h2.title::before {
    content: '';
    background: url(${quoteStart}) center/contain no-repeat;
    width: 60px;
    height: 60px;
  }

  h2.title::after {
    content: '';
    background: url(${quoteEnd}) center/contain no-repeat;
    width: 60px;
    height: 60px;
  }

  h2 {
    margin: 0;
  }

  h2 span {
    flex-shrink: 0;
    margin-right: 12px;
  }

  .note-list,
  .one-day .note-list,
  .one-week .note-list,
  .one-month .note-list {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .note-list article {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    max-width: 100%;
    width: 478px;
    padding: 30px 28px 35px;
    border-radius: 16px;
    background-color: var(--bg);
    box-shadow: 0 0 8px var(--bg);
    transition: all 0.2s;
  }

  .note-list article:hover {
    box-shadow: 0 0 50px var(--bg);
    transform: scale(1.02);
  }

  .note-title {
    font-size: 16px;
    font-weight: 700;
    color: var(--icon, #9BABB2);
    width: 100%;
    text-align: center;
    white-space: pre-wrap;
    line-height: 20px;
  }

  .note-content {
    background: none;
    width: 100%;
    font-size: 14px;
    color: var(--em, #dde0e4);
    line-height: 20px;
    resize: none;
    border-radius: 8px;
    padding: 4px;
  }

  .note-content:hover {
    background-color: var(--bg-3);
  }

  @media (max-width:500px) {
    & {
      padding: 24px;
    }

    h2 {
      margin-bottom: 16px;
    }

    h3.title {
      flex-direction: column;
    }
  }
`

export const BtnNew = styled.button`
  position: fixed;
  margin-left: 16px;
  bottom: 32px;
  right: 32px;

  width: 65px;
  height: 65px;
  border-radius: 50%;

  box-shadow: 0 0 16px var(--bg-4);
  z-index: 10;
  order: 10;
  background-color: var(--primary);
  
  .x-1,
  .x-2 {
    width: 32px;
    height: 3px;
    background-color: var(--bg-2);
    position: absolute;
    top: 31px;
    left: 16px;
    transition: all 0.4s;
  }

  .x-1 {
    transform: rotate(90deg);
  }

  .x-2 {
    transform: rotate(0deg);
  }

  .guide {
    color: var(--em);
    position: absolute;
    width: 120px;
    text-align: center;
    background-color: var(--bg-2);
    box-shadow: 0 0 16px var(--bg-3);
    opacity: 0;

    top: -2em;
    left: calc(0px - 10px - 1em);

    border-radius: 8px;
    padding: 8px;
    transition: all 0.3s;
  }

  &:hover .guide{
    opacity: 1;
    transform: translateY(-1em);
  }

  &:hover .x-1 {
    transform: rotate(180deg);
  }

  &:hover .x-2 {
    transform: rotate(90deg);
  }
`