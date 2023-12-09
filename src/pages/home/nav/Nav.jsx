import React, { useEffect, useRef } from 'react';
import * as N from "./Nav.style.jsx"

export default function Nav() {
  const tapAll = useRef();
  const tap24 = useRef();
  const tapWeek = useRef();
  const tapMonth = useRef();

  useEffect(()=>{
    tapAll.current.classList.add("opened");
    tap24.current.classList.remove("opened");
    tapWeek.current.classList.remove("opened");
    tapMonth.current.classList.remove("opened");
  }, [])

  const handleTapChange = (e) => {
    if (!e.target.classList.contains("opened")) {
      e.target.classList.add("opened");

      switch (e.target) {
        case tapAll.current :
          // 나머지 다꺼
          tap24.current.classList.remove("opened");
          tapWeek.current.classList.remove("opened");
          tapMonth.current.classList.remove("opened");
          break;
        // case tap24.current :
        //   break;
        // case tapWeek.current :
        //   break;
        // case tapMonth.current :
        //   break;
        default:
          tapAll.current.classList.remove("opened");
          break;
      }
    } else {
      e.target.classList.remove("opened");
    }
  }

  return (
    <>
        <N.Nav className="nav">
            <ul className='nav-ul'>
                <li ref={tapAll} className="tap-all" onClick={handleTapChange}>모든 기록</li>
                <li ref={tap24} className="tap-24hr" onClick={handleTapChange}>24시간</li>
                <li ref={tapWeek} className="tap-week" onClick={handleTapChange}>일주일</li>
                <li ref={tapMonth} className="tap-month" onClick={handleTapChange}>한 달</li>
            </ul>
        </N.Nav>
    </>
  )
}
