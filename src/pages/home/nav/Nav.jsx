import React, { useEffect, useRef, useState } from 'react';
import * as N from "./Nav.style.jsx";
import { navData } from './navData.js';
import useCollection from '../../../hooks/useCollection.jsx';
import { useAuthContext } from '../../../hooks/useAuthContext.jsx';

export default function Nav({ 
  setDiaryData,
  selected, 
  setSelected
}) {
  const { user } = useAuthContext();
  const { documents } = useCollection( 'diary', ['doc.uid', '==', user.uid] );

  const handleDiaryFilter = (e) => {
    const newSelected = navData.find(datum => datum.endTime == e.target.getAttribute('data-end'));
    setSelected(newSelected);
  }

  useEffect(() => {
    if (!documents) return;

    const filteredDocuments = documents.filter(doc => {
      const createdTime = doc.createdTime.toDate();
      const now = new Date();
      const diff = now - createdTime;
      const selectedMilliEnd = Number(selected.endTime) * 60 * 60 * 1000;
      const selectedMilliStart = Number(selected.startTime) * 60 * 60 * 1000;
      return diff < selectedMilliEnd && diff > selectedMilliStart;
    });

    setDiaryData(filteredDocuments);
  }, [selected])

  return (
    <>
        <N.Nav className="nav">
            <ul className='nav-ul'>
                {navData.map(datum => (<>
                  <li 
                    data-end={datum.endTime}
                    className={`${datum.className} ${
                      datum.startTime == selected.startTime 
                      && datum.endTime == selected.endTime ? 
                      'opened' : ''}`
                    }
                    onClick={handleDiaryFilter}
                  >
                    {datum.label}
                  </li>
                </>))}
            </ul>
        </N.Nav>
    </>
  )
}
