import TodayModal from "./TodayModal"
import DiaryList from './DiaryList';
import Nav from "./Nav";
import Menu from "./Menu";
import useCollection from '../../hooks/useCollection';
import { useAuthContext } from "../../hooks/useAuthContext";
import iconDofDay from "../../images/icon/icon-d-of-day.png"
import { useState } from "react";
import "../../css/home.css"

export default function Home({isMenuOpen, setIsMenuOpen}) {
	const { user } = useAuthContext();
  // console.log("user", user.uid); 

  const { documents, error } = useCollection( 'diary', ['uid', '==', user.uid] );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleNewBtn = (e) => {
    setIsModalOpen(true);
  };

  return (
    <div className="home-wrapper"> 
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      
      <main className="home">
        <Nav />
        <section className="old">
          <h2 className="title typing">
            <span className="mark">당장</span>
            &nbsp;기록했던 내용들을 다시 타이핑 해보면서 복습해보세요!
          </h2>
  
          <div className="category-24hr">
            <h3 className="title">
            <img src={iconDofDay} alt="icon-d-of-day" className="icon-d-of-day" />
            <strong>24시간 </strong> &nbsp;| 지금 복습하면&nbsp; <strong>60%</strong>&nbsp;를 더 기억할 수 있어요!
            </h3>
            <ul className="note-list">
              {error && <strong>{error}</strong> }
              {documents && <DiaryList diaries={documents} />}
            </ul>
          </div>
        </section>
      </main>
      
      <button type="button" className="btn-new" onClick={handleNewBtn}>
          <div className="x-1"></div>
          <div className="x-2"></div>
          <p className="guide">당장 복습하기!</p>
      </button>

      {isModalOpen && <TodayModal setIsModalOpen={setIsModalOpen}/>}
    </div>
  )
}