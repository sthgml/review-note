import { useLogin } from '../../hooks/useLogin';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoBig from "../../images/당장복습헤_logo 1.png"

function Login () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { error, isPending, login } = useLogin();

    const handleData = (event) => {
        if (event.target.type === "email") {
            setEmail(event.target.value);
        } else if (event.target.type === "password") {
            setPassword(event.target.value);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(email, password);
        login(email, password);
    }

    return (
        <main className="main">
        <Link to="./">
            <img src={logoBig} alt="당장복습헤 로고" className="logo-big"/>
        </Link>
        <h1 className="mark">로그인</h1>
        <form 
        className="form" 
        action="#" 
        method="post" 
        name="user-info-join" 
        onSubmit={handleSubmit}>
            <div className="input-user-email">
                <label htmlFor="user-email">
                    이메일
                </label>
                <input 
                    type="email" 
                    id="user-email" 
                    name="user-email" 
                    className="user-email" placeholder="example@exam.ple" 
                    onChange={handleData} 
                    required 
                />
                <p className="warning-text">
                    아이디를 확인해주세요!
                </p>
            </div>
            <div className="input-user-pw">
                <label htmlFor="user-pw">
                    비밀번호
                </label>
                <input 
                    type="password" 
                    id="user-pw" 
                    name="user-pw" 
                    placeholder="비밀번호" 
                    className="user-pw" 
                    onChange={handleData}
                    required
                />
                <p className="warning-text">
                    비밀번호를 확인해주세요!
                </p>
            </div>
            
            {isPending 
            ? <strong>로그인이 진행중입니다.</strong> 
            : <button 
                type="submit" 
                className="btn-join">
                    로그인
            </button>}
            {error && <strong>{error}</strong>}
        </form>
        {/* 소셜로그인 
        <div className="division">
            <hr className="division-line" />
            <p className="or">또는</p>
        </div>
        <div className="social-login">
            <button type="submit" className="btn-join">
                로그인
            </button>
            <button type="submit" className="btn-join">
                로그인
            </button><button type="submit" className="btn-join">
                로그인
            </button><button type="submit" className="btn-join">
                로그인
            </button>
        </div> */}
        <p className="assistive-text">Copyright 2023. Sohee Park All rights reserved.</p>
    </main>
    )
}
export default Login