import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  
  max-width: 100%;
  width: 400px;

  margin: 32px auto;
  padding: 40px 24px;

  background: var(--bg-2);
  border-radius: 16px;

  .logo-big {
    width: 166px;
  }

  h1 {
    font-size: 24px;
    font-weight: 700;
  }

  .form {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
  }

  .btn-join {
    margin-top: 24px;
  }

  .division {
    width: 100%;
    position: relative;
  }

  hr.division-line {
    width: 100%;
    background:var(--medium);
    height:1px;
    border:0;
  }

  .or {
    position: absolute;
    top: -0.5em;
    left: calc(50% - 1em - 8px);
    background-color: var(--bg-2);
    padding: 0 8px;
  }
`