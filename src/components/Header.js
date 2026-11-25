import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import '../pages/css/Header.css';
import logo from '../assets/images/logo.png';

function Header() {
  const [activeMall, setActiveMall] = useState('market'); // 'market' | 'beauty'
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmedKeyword = keyword.trim();
    if (!trimmedKeyword) return;

    navigate(`/search?keyword=${encodeURIComponent(trimmedKeyword)}&mall=${activeMall}`);
  };

  return (
    <header className="kully_header">
      <div className="header_inner">
        {/* 1단: 회원가입 / 로그인 / 고객센터 */}
        <div className="top_utility">
          <Link to="/join" className="signup">회원가입</Link>
          <span className="divider">|</span>
          <Link to="/login">로그인</Link>
          <span className="divider">|</span>
          <Link to="/cs">
            고객센터 <i className="fa-solid fa-caret-down"></i>
          </Link>
        </div>

        {/* 2단: 로고 & 마켓/뷰티 전환 + 검색창 + 아이콘 */}
        <div className="middle_bar">
          <div className="brand_area">
            <Link to="/" className="logo_link">
              <img
                src={logo}
                alt="마켓컬리 로고"
                className="logo_img"
              />
            </Link>
            <div className="mall_switch">
              <button
                type="button"
                className={activeMall === 'market' ? 'active' : ''}
                onClick={() => {
                  setActiveMall('market');
                  navigate('/');
                }}
              >
                마켓컬리
              </button>
              <span className="divider">|</span>
              <button
                type="button"
                className={activeMall === 'beauty' ? 'active' : ''}
                onClick={() => {
                  setActiveMall('beauty');
                  navigate('/beauty');
                }}
              >
                뷰티컬리
              </button>
            </div>
          </div>

          <form className="search_box" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="검색어를 입력해주세요"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <button type="submit" aria-label="검색">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>

          <div className="icon_group">
            <button
              type="button"
              aria-label="배송지 설정"
              onClick={() => navigate('/address')}
            >
              <i className="fa-solid fa-location-dot"></i>
            </button>
            <button
              type="button"
              aria-label="찜하기"
              onClick={() => navigate('/wishlist')}
            >
              <i className="fa-regular fa-heart"></i>
            </button>
            <button
              type="button"
              aria-label="장바구니"
              onClick={() => navigate('/cart')}
            >
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
      </div>

      {/* 3단: 카테고리 / 메인 GNB / 배송안내 */}
      <nav className="gnb_wrap">
        <div className="gnb_inner">
          <button
            type="button"
            className="category_btn"
            onClick={() => navigate('/categories')}
          >
            <i className="fa-solid fa-bars"></i>
            <span>카테고리</span>
          </button>

          <ul className="gnb_menu">
            <li><Link to="/new">신상품</Link></li>
            <li><Link to="/best">베스트</Link></li>
            <li><Link to="/alddle">알뜰쇼핑</Link></li>
            <li><Link to="/benefit">특가/혜택</Link></li>
          </ul>

          <Link to="/delivery" className="delivery_badge">
            <span className="purple">샛별·하루</span> 배송안내
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;