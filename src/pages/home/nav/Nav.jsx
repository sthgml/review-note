import React from 'react';
import iconDofDay from "../../../images/icon/icon-d-of-day.png";
import iconWofWeek from "../../../images/icon/icon-w-of-week.png";
import iconMofMonth from "../../../images/icon/icon-m-of-month.png";
import * as N from "./Nav.style.jsx"

export default function Nav() {
  return (
    <>
        <N.Nav className="nav">
            <ul>
                <li className="tap-all opened">모든 기록</li>
                <li className="tap-24hr"><img src={iconDofDay} alt="icon-d-of-day" className="icon-d-of-day" />24시간</li>
                <li className="tap-week"><img src={iconWofWeek} alt="icon-w-of-week" className="icon-w-of-week" />일주일</li>
                <li className="tap-month"><img src={iconMofMonth} alt="icon-m-of-month" className="icon-m-of-month" />한 달</li>
            </ul>
        </N.Nav>
    </>
  )
}
