import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Join from './pages/join/Join';
import { useAuthContext } from "./hooks/useAuthContext";
import { useState } from 'react';

function App() {

  const { isAuthReady, user } = useAuthContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      { isAuthReady ?
      <BrowserRouter>
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Routes>
          <Route path='/' element={user ? <Home isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} /> : <Navigate replace={true} to="/login" />} />
          <Route path='/login' element={!user ? <Login /> : <Navigate replace={true} to="/" />} />
          <Route path='/' element={!user ? <Join /> : <Navigate replace={true} to="/" />} />
        </Routes>
      </BrowserRouter> :
      "loading"}
    </>
  );
}

export default App;
