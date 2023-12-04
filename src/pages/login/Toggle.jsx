import React, { useRef } from 'react';
import styled from 'styled-components';

const ToggleDiv = styled.div`
  margin-top: 12px;
  margin-left: 56px;
  position: relative;

  input {
    display: none;
  }

  #toggle-ball,
  #toggle-ball::after {
    content: '';
    display: inline-block;
    position: absolute;

    height: 24px;
    border-radius: 16px;
    margin-right: 8px;
  }

  #toggle-ball {
    width: 48px;
    top: -4px;
    left: -56px;
    box-shadow:  inset 0 0 4px var(--bg);
    background-color: var(--bg-3);
    transition: 0.3s;
  }

  #toggle-ball::after {
    width: 24px;
    box-sizing: border-box;
    background-color: var(--medium);
    box-shadow: inset 0 0 4px #a7a7a7;
    transition: 0.3s;
  }

  input:checked + #toggle-ball::after {
    transform: translateX(24px);
  }
  input:checked + #toggle-ball {
    background-color: var(--primary);
  }
`

export default function Toggle({onChange}) {
  const checkboxInput = useRef();
  const handleClickToggleBall = () => {
    checkboxInput.current.click();
  }

  return (
    <ToggleDiv>
      <label htmlFor="btn-test">테스트 계정으로 체험하기</label>
      <input ref={checkboxInput} type='checkbox' id='btn-test' onChange={onChange}/>
      <div id='toggle-ball' onClick={handleClickToggleBall}></div>
      
    </ToggleDiv>
  )
}
