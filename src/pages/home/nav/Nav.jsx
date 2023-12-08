import React from 'react';
import * as N from "./Nav.style.jsx"

export default function Nav() {
  return (
    <>
        <N.Nav className="nav">
            <ul>
                <li className="tap-all opened">모든 기록</li>
                <li className="tap-24hr">24시간</li>
                <li className="tap-week">일주일</li>
                <li className="tap-month">한 달</li>
            </ul>
        </N.Nav>
    </>
  )
}
