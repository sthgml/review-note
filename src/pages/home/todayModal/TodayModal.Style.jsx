import styled from "styled-components";
import quoteStart from "../../../images/quote-start.png";
import quoteEnd from "../../../images/quote-end.png";

export const Section = styled.section`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;

  padding: 32px 24px;
  width: 464px;
  flex-direction: column;

  min-width: 464px;
  max-width: 100%;
  margin: auto;
  background: var(--bg-2);
  border-radius: 16px;  

  .form.new {
    background: var(--bg);
    padding: 16px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 100%;
    min-width: 368px;
  }

  h2 {
    width: max-content;
    margin: 0 auto;
    margin-bottom: 32px;
  }

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
`

/* ---- today modal ---- */

/* ---- dim ---- */
export const Dim = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000000c5;
`