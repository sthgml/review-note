import { useAuthContext } from "../../../hooks/useAuthContext";
import { useLogout } from "../../../hooks/useLogout"
import { Link, useLocation } from "react-router-dom";
import iconLogout from "../../../images/icon/icon-logout.svg";
import iconLogin from "../../../images/icon/icon-login.svg";
import iconJoin from "../../../images/icon/icon-join.svg";
import * as H from "./Header.style.jsx";
import Hamburger from "./Hamburger.jsx";

function Header ({ isMenuOpen, setIsMenuOpen }) {

    const { logout } = useLogout();
    const { user } = useAuthContext();
    const location = useLocation();
    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <H.Header>
            <div className="container">
                <div className="left-header">
                    {user && <Hamburger isMenuOpen={isMenuOpen} handleMenu={handleMenu}/>}
                    <h1>
                        <p className="a11y-hidden">당장복습헤_logo</p>
                        <Link href="./">
                            <div alt="당장복습헤 로고" className="logo-sm" />
                        </Link>
                    </h1>
                </div>
                
                <div className="info">
                    {/* 유저정보가 없는 상태(null) 즉, 로그아웃 상태라면 */}
                    {!user && (
                        <>
                            {location.pathname !== '/join' ?
                                <>
                                    <Link to="/login" className={"link-login"}>
                                        <img src={iconLogin} alt="icon-login" className="icon-login"/>
                                        <p className="text-login">로그인</p>
                                        </Link>
                                    <Link to="/join" className="link-join">
                                        <img src={iconJoin} alt="icon-join" className="icon-join" />
                                        <p className="text-join">회원가입</p>
                                    </Link>
                                </>
                                : <Link to="/login" className={"text-join"}>로그인</Link>
                            }
                        </>
                    )}

                    {/* 유저정보가 있는 즉, 로그인 상태라면 */}
                    {user && (
                        <>
                            <div className="welcome-text">
                                <p className="welcome">환영합니다.&nbsp;</p>
                                <p className="mark">홍길동님</p>
                            </div>
                    
                            <Link to="/login" className="logout" onClick={logout}>
                                <img src={iconLogout} alt="icon-logout" className="icon-logout" />
                                <p className="text-logout">로그아웃</p>
                            </Link>
                        </>
                    )}
                </div>
            </div>

        </H.Header>
    )
}
export default Header
