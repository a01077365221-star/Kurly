import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import './css/Login.css';

function Login() {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
  e.preventDefault();

  if (!userId.trim()) {
    alert('아이디를 입력해주세요.');
    return;
  }

  if (!userPw.trim()) {
    alert('비밀번호를 입력해주세요.');
    return;
  }

  if (userId === 'admin' && userPw === '1234') {
    alert('로그인 성공!');
    navigate('/');
  } else {
    alert('아이디 또는 비밀번호가 일치하지 않습니다.');
  }
};

  return (
    <section className="kurly_login">
      <div className="login_container">
        <h2 className="login_title">로그인</h2>

        <form className="login_form" onSubmit={handleLogin}>
          <div className="input_wrap">
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="아이디를 입력해주세요"
            />
            <input
              type="password"
              value={userPw}
              onChange={(e) => setUserPw(e.target.value)}
              placeholder="비밀번호를 입력해주세요"
            />
          </div>

          <div className="find_area">
            <Link to="/find-id">아이디 찾기</Link>
            <span className="divider">|</span>
            <Link to="/find-pw">비밀번호 찾기</Link>
          </div>

          <div className="btn_group">
            <button type="submit" className="btn_login">
              로그인
            </button>
            <Link to="/join" className="btn_join">
              회원가입
            </Link>
          </div>
        </form>

        <div className="sns_login_area">
        <h2 className="login_title">간편 로그인</h2>

          <div className="sns_btn_group">
            <button type="button" className="btn_naver">
              <span className="sns_icon naver_icon">N</span>
              <span>네이버로 계속하기</span>
            </button>
            <button type="button" className="btn_kakao">
              <i className="fa-solid fa-comment sns_icon kakao_icon"></i>
              <span>카카오로 계속하기</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;