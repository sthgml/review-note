import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from "./components/organisms/Header/Header";
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Join from './pages/join/Join';
import { useAuthContext } from "./hooks/useAuthContext";
import { useState } from 'react';
import GlobalStyle from './GlobalStyle';
import loadingAnimation from "./images/makingPageAnimation.gif"

function App() {

  const { isAuthReady, user } = useAuthContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <GlobalStyle />
      { isAuthReady ?
        <BrowserRouter>
          <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <Routes>
            <Route path='/' element={user ? <Home isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} /> : <Navigate replace={true} to="/login" />} />
            <Route path='/login' element={!user ? <Login /> : <Navigate replace={true} to="/" />} />
            <Route path='/join' element={!user ? <Join /> : <Navigate replace={true} to="/" />} />
            <Route path='*' element={<Navigate replace={true} to="/"/>} />
          </Routes>
        </BrowserRouter> 
      :
      <img src={loadingAnimation} alt='로딩애니메이션' style={{
        display: "block",
        height: "100vh",
        width: "150px",
        objectFit: "contain",
        margin: "auto"
      }}></img>}
    </>
  );
}

export default App;
