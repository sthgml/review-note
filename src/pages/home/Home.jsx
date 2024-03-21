import TodayModal from "./todayModal/TodayModal"
import DiaryList from './DiaryList';
import Nav from "./nav//Nav";
import Menu from "./menu/Menu";
import useCollection from '../../hooks/useCollection';
import { useAuthContext } from "../../hooks/useAuthContext";
import { useEffect, useState } from "react";
import * as H from "./Home.style.jsx"
import CategoryTitle from "./CategoryTitle";

export default function Home({isMenuOpen, setIsMenuOpen}) {
	const { user } = useAuthContext();

  const { documents, error } = useCollection( 'diary', ['doc.uid', '==', user.uid] );
  const [ diaryData, setDiaryData ] = useState(documents);
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const [ selected, setSelected ] = useState({
    startTime: 0,
    endTime: 9999
  });

  const syncData = () => {
    setDiaryData(documents);
  }
  
  useEffect(() => {
    syncData();
  }, [documents, isModalOpen])
  
  const handleNewBtn = (e) => {
    setIsModalOpen(true);
  };

  return (
    <H.HomeWrapper className="home-wrapper"> 
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      <main className="home">
        <Nav 
          selected={selected} 
          setSelected={setSelected} 
          setDiaryData={setDiaryData}
        />
        <H.Old className="old">
          <h2 className="title typing">
            <span className="mark">당장</span>
            &nbsp;기록했던 내용들을 다시 타이핑 해보면서 복습해보세요!
          </h2>
  
          <div className="category-24hr">
            <CategoryTitle selected={selected}/>
            <ul className="note-list">
              {error && <strong>{error}</strong> }
              {diaryData && <DiaryList diaries={diaryData} />}
            </ul>
          </div>
        </H.Old>
      </main>
      
      <H.BtnNew type="button" className="btn-new" onClick={handleNewBtn}>
          <div className="x-1"></div>
          <div className="x-2"></div>
          <p className="guide">당장 복습하기!</p>
      </H.BtnNew>

      {isModalOpen && <TodayModal setIsModalOpen={setIsModalOpen}/>}
    </H.HomeWrapper>
  )
}