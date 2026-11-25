import React from 'react';
import './css/Join.css';

function Join() {
  const handleDummySubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="kurly_signup">
      <div className="signup_container">
        <h2 className="signup_title">회원가입</h2>

        <div className="required_guide">
          <span>*</span> 필수입력사항
        </div>

        <form className="signup_form" onSubmit={handleDummySubmit}>
          {/* 아이디 */}
          <div className="form_row">
            <div className="label_box">
              <label htmlFor="userId">
                아이디<span>*</span>
              </label>
            </div>
            <div className="input_box">
              <input
                id="userId"
                type="text"
                placeholder="아이디를 입력해주세요"
              />
            </div>
            <div className="btn_box empty"></div>
          </div>

          {/* 비밀번호 */}
          <div className="form_row">
            <div className="label_box">
              <label htmlFor="userPw">
                비밀번호<span>*</span>
              </label>
            </div>
            <div className="input_box">
              <input
                id="userPw"
                type="password"
                placeholder="비밀번호를 입력해주세요"
              />
            </div>
            <div className="btn_box empty"></div>
          </div>

          {/* 비밀번호확인 */}
          <div className="form_row">
            <div className="label_box">
              <label htmlFor="userPwConfirm">
                비밀번호확인<span>*</span>
              </label>
            </div>
            <div className="input_box">
              <input
                id="userPwConfirm"
                type="password"
                placeholder="비밀번호를 한번 더 입력해주세요"
              />
            </div>
            <div className="btn_box empty"></div>
          </div>

          {/* 이름 */}
          <div className="form_row">
            <div className="label_box">
              <label htmlFor="userName">
                이름<span>*</span>
              </label>
            </div>
            <div className="input_box">
              <input
                id="userName"
                type="text"
                placeholder="이름을 입력해주세요"
              />
            </div>
            <div className="btn_box empty"></div>
          </div>

          {/* 이메일 */}
          <div className="form_row">
            <div className="label_box">
              <label htmlFor="userEmail">
                이메일<span>*</span>
              </label>
            </div>
            <div className="input_box">
              <input
                id="userEmail"
                type="email"
                placeholder="예: marketkurly@kurly.com"
              />
            </div>
            <div className="btn_box empty"></div>
          </div>

          {/* 휴대폰 */}
          <div className="form_row">
            <div className="label_box">
              <label htmlFor="userPhone">
                휴대폰<span>*</span>
              </label>
            </div>
            <div className="input_box">
              <input
                id="userPhone"
                type="tel"
                placeholder="숫자만 입력해주세요"
              />
            </div>
            <div className="btn_box">
              <button type="button" className="disabled_btn">
                인증번호 받기
              </button>
            </div>
          </div>

          {/* 주소 */}
          <div className="form_row align_top">
            <div className="label_box">
              <label htmlFor="userAddress">
                주소<span>*</span>
              </label>
            </div>
            <div className="input_box">
              <button type="button" className="address_search_btn">
                <i className="fa-solid fa-magnifying-glass"></i>
                <span>주소 검색</span>
              </button>
              <p className="guide_text">
                배송지에 따라 상품 정보가 달라질 수 있습니다.
              </p>
            </div>
            <div className="btn_box empty"></div>
          </div>

          {/* 성별 */}
          <div className="form_row">
            <div className="label_box">
              <span>성별</span>
            </div>
            <div className="input_box radio_group">
              <label className="radio_label">
                <input type="radio" name="gender" value="male" />
                <span>남자</span>
              </label>
              <label className="radio_label">
                <input type="radio" name="gender" value="female" />
                <span>여자</span>
              </label>
              <label className="radio_label">
                <input type="radio" name="gender" value="none" defaultChecked />
                <span>선택안함</span>
              </label>
            </div>
            <div className="btn_box empty"></div>
          </div>

          {/* 생년월일 */}
          <div className="form_row">
            <div className="label_box">
              <span>생년월일</span>
            </div>
            <div className="input_box">
              <div className="birth_box">
                <input type="text" maxLength="4" placeholder="YYYY" />
                <span>/</span>
                <input type="text" maxLength="2" placeholder="MM" />
                <span>/</span>
                <input type="text" maxLength="2" placeholder="DD" />
              </div>
            </div>
            <div className="btn_box empty"></div>
          </div>

          {/* 추가입력 사항 */}
          <div className="form_row">
            <div className="label_box">
              <span>추가입력 사항</span>
            </div>
            <div className="input_box radio_group">
              <label className="radio_label">
                <input type="radio" name="extra" value="recommender" />
                <span>추천인 아이디</span>
              </label>
              <label className="radio_label">
                <input type="radio" name="extra" value="event" />
                <span>참여 이벤트명</span>
              </label>
            </div>
            <div className="btn_box empty"></div>
          </div>

          <hr className="form_divider" />

          {/* 이용약관동의 */}
          <div className="form_row align_top terms_row">
            <div className="label_box">
              <span>
                이용약관동의<span>*</span>
              </span>
            </div>
            <div className="input_box terms_box">
              <label className="check_label agree_all">
                <input type="checkbox" />
                <span>전체 동의합니다</span>
              </label>
              <p className="terms_sub_desc">
                선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.
              </p>

              <label className="check_label">
                <input type="checkbox" />
                <span>이용약관 동의 <em>(필수)</em></span>
                <span className="view_terms">약관보기 &gt;</span>
              </label>

              <label className="check_label">
                <input type="checkbox" />
                <span>개인정보 수집·이용 동의 <em>(필수)</em></span>
                <span className="view_terms">약관보기 &gt;</span>
              </label>

              <label className="check_label">
                <input type="checkbox" />
                <span>개인정보 수집·이용 동의 <em>(선택)</em></span>
                <span className="view_terms">약관보기 &gt;</span>
              </label>

              <label className="check_label">
                <input type="checkbox" />
                <span>무료배송, 할인쿠폰 등 혜택/정보 수신 동의 <em>(선택)</em></span>
              </label>

              <label className="check_label">
                <input type="checkbox" />
                <span>본인은 만 14세 이상입니다. <em>(필수)</em></span>
              </label>
            </div>
            <div className="btn_box empty"></div>
          </div>

          {/* 가입하기 버튼 */}
          <div className="submit_area">
            <button type="submit" className="btn_submit">
              가입하기
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Join;