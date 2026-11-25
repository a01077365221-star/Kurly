import React from 'react';
import { Link } from 'react-router';
import '../pages/css/Footer.css';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="kully_footer">
      <div className="footer_inner">
        {/* 상단: 좌측 고객행복센터 / 우측 회사정보 & SNS */}
        <div className="footer_top">
          <div className="cs_area">
            <h2 className="cs_title">고객행복센터</h2>
            <div className="cs_call">
              <strong className="cs_number">1644-1107</strong>
              <span className="cs_time">월~토요일 오전 7시 - 오후 6시</span>
            </div>

            <div className="cs_inquiry_list">
              <div className="cs_row">
                <Link to="/cs/kakao" className="cs_btn">카카오톡 문의</Link>
                <div className="cs_desc">
                  <p>월~토요일 <span className="bar">|</span> 오전 7시 - 오후 6시</p>
                  <p>일/공휴일 <span className="bar">|</span> 오전 7시 - 오후 1시</p>
                </div>
              </div>

              <div className="cs_row">
                <Link to="/cs/qna" className="cs_btn">1:1 문의</Link>
                <div className="cs_desc">
                  <p>365일</p>
                  <p>고객센터 운영시간에 순차적으로 답변드리겠습니다.</p>
                </div>
              </div>

              <div className="cs_row">
                <Link to="/cs/bulk" className="cs_btn">대량주문 문의</Link>
                <div className="cs_desc">
                  <p>월~금요일 <span className="bar">|</span> 오전 9시 - 오후 6시</p>
                  <p>점심시간 <span className="bar">|</span> 낮 12시 - 오후 1시</p>
                </div>
              </div>
            </div>

            <p className="non_member_mail">
              비회원 문의 : <a href="mailto:help@kurlycorp.com">help@kurlycorp.com</a>
            </p>
          </div>

          <div className="company_area">
            <ul className="footer_nav">
              <li><Link to="/company">회사소개</Link></li>
              <li><Link to="/company/video">컬리소개영상</Link></li>
              <li><Link to="/ir">투자정보</Link></li>
              <li><Link to="/recruit">인재채용</Link></li>
              <li><Link to="/terms">이용약관</Link></li>
              <li><Link to="/privacy" className="bold">개인정보처리방침</Link></li>
              <li><Link to="/guide">이용안내</Link></li>
              <li><Link to="/partner">입점신청</Link></li>
            </ul>

            <div className="company_info">
              <p>
                법인명 (상호) : 주식회사 컬리 <span className="bar">|</span> 사업자등록번호 : 261-81-23567{' '}
                <a href="#business-info" className="link_purple">사업자정보 확인</a>
              </p>
              <p>통신판매업 : 제 2018-서울강남-01646 호</p>
              <p>
                주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동) <span className="bar">|</span>{' '}
                대표이사 : 김슬아
              </p>
              <p>
                채용문의 : <a href="mailto:recruit@kurlycorp.com" className="link_purple">recruit@kurlycorp.com</a>
              </p>
              <p>팩스 : 070 - 7500 - 6098</p>
            </div>

            <div className="sns_group">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="인스타그램"
                className="sns_btn instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="페이스북"
                className="sns_btn facebook"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="https://blog.naver.com"
                target="_blank"
                rel="noreferrer"
                aria-label="네이버 블로그"
                className="sns_btn blog"
              >
                <span>b</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="유튜브"
                className="sns_btn youtube"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        {/* 중단: 인증 / 채무지급보증 */}
        <div className="footer_cert">
          <div className="cert_item">
            <span className="cert_badge">ISMS</span>
            <p>
              [인증범위] 컬리 쇼핑몰 서비스 개발·운영
              <br />
              (심사받지 않은 물리적 인프라 제외)
              <br />
              [유효기간] 2025.01.15 ~ 2028.01.14
            </p>
          </div>

          <div className="cert_item">
            <span className="bank_badge">우리은행</span>
            <p>
              고객님이 현금으로 결제한 금액에 대해 우리은행과
              <br />
              채무지급보증 계약을 체결하여 안전거래를 보장하고
              <br />
              있습니다.
            </p>
          </div>
        </div>
      </div>

      {/* 최하단 고지 */}
      <div className="footer_bottom">
        <p>
          컬리에서 판매되는 상품 중에는 컬리에 입점한 개별 판매자가 판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.
        </p>
        <p>
          마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서 통신판매의 당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질, 교환/환불 등 의무와 책임을 부담하지 않습니다.
        </p>
        <p className="copyright">© KURLY CORP. ALL RIGHTS RESERVED</p>
      </div>

      {/* 우측 하단 최상단 이동 버튼 */}
      <button
        type="button"
        className="scroll_top_btn"
        onClick={scrollToTop}
        aria-label="맨 위로 이동"
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </footer>
  );
}

export default Footer;