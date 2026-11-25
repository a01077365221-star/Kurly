import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './css/Main.css';
import SpecialDealSection from '../components/SpecialDealSection';
import MidBanner from '../components/MidBanner';
import swiper1 from '../assets/images/swiper1.jpg';
import swiper2 from '../assets/images/swiper2.jpg';
import swiper3 from '../assets/images/swiper3.jpg';
import swiper4 from '../assets/images/swiper4.jpg';
import kurly1 from '../assets/images/마켓컬리1.jpg';
import kurly2 from '../assets/images/마켓컬리2.jpeg';
import kurly3 from '../assets/images/마켓컬리3.jpg';
import kurly4 from '../assets/images/마켓컬리4.jpg';

function Main() {
  return (
    <main className="kully_main">
      {/* 1. 메인 슬라이드 배너 */}
      <div className="main_banner_wrap">
        <section>
          <Swiper
            modules={[Pagination, Scrollbar, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            className="mslide"
          >
            <SwiperSlide className="swiper_slide">
              <img src={swiper1} alt="메인 배너 1" />
            </SwiperSlide>
            <SwiperSlide className="swiper_slide">
              <img src={swiper2} alt="메인 배너 2" />
            </SwiperSlide>
            <SwiperSlide className="swiper_slide">
              <img src={swiper3} alt="메인 배너 3" />
            </SwiperSlide>
            <SwiperSlide className="swiper_slide">
              <img src={swiper4} alt="메인 배너 4" />
            </SwiperSlide>
          </Swiper>
        </section>
      </div>

      {/* 2. 추천/인기 상품 4열 영역 */}
      <article className="best_product">
        <h4>🏆가정의달 인기선물 최대 혜택🏆</h4>
        <p>가장 인기있는 상품만 모아보세요!</p>
        <ul>
          <li>{/* <Link to="/">dsgfsgsdfg</Link> */}</li>
        </ul>

        <div className="list_wrap">
          <ul className="product">
            <li>
              <div className="box">
                <span className="coupon_tag">+10% 쿠폰</span>
                <img src={kurly1} alt="상품 1" />
              </div>
              <button type="button" className="cart_btn">
                <i className="fa-solid fa-cart-shopping"></i> 담기
              </button>
              <div className="prod_info">
                <p className="prod_name">[비비고] 순살 생선구이 6종 (택1)</p>
                <span className="origin_price">9,900원</span>
                <p className="price_row">
                  <span className="discount_rate">22%</span>
                  <span>7,700원~</span>
                </p>
                <span className="review_text">💬 9,999+</span>
              </div>
            </li>

            <li>
              <div className="box">
                <span className="coupon_tag">최대15% 쿠폰</span>
                <img src={kurly2} alt="상품 2" />
              </div>
              <button type="button" className="cart_btn">
                <i className="fa-solid fa-cart-shopping"></i> 담기
              </button>
              <div className="prod_info">
                <p className="prod_name">[Dole] 스위티오 바나나 2종 (택1)</p>
                <span className="origin_price">15,900원</span>
                <p className="price_row">
                  <span className="discount_rate">30%</span>
                  <span>11,130원</span>
                </p>
                <span className="review_text">💬 9,999+</span>
              </div>
            </li>

            <li>
              <div className="box">
                <span className="coupon_tag">+15%쿠폰</span>
                <img src={kurly3} alt="상품 3" />
                <span className="lowest_badge">최저가<br />도전</span>
              </div>
              <button type="button" className="cart_btn">
                <i className="fa-solid fa-cart-shopping"></i> 담기
              </button>
              <div className="prod_info">
                <p className="prod_name">[이연복의 목란] 짬뽕 2인분 (맵기선택)</p>
                <span className="origin_price">15,900원</span>
                <p className="price_row">
                  <span className="discount_rate">17%</span>
                  <span>13,150원~</span>
                </p>
              </div>
            </li>

            <li>
              <div className="box">
                <span className="coupon_tag">+15%쿠폰</span>
                <img src={kurly4} alt="상품 4" />
              </div>
              <button type="button" className="cart_btn">
                <i className="fa-solid fa-cart-shopping"></i> 담기
              </button>
              <div className="prod_info">
                <p className="prod_name">[KF365] 양념 소불고기 4종 (택1)</p>
                <span className="origin_price">6,000원</span>
                <p className="price_row">
                  <span className="discount_rate">15%</span>
                  <span>5,100원</span>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </article>

      <MidBanner />
      <SpecialDealSection />
    </main>
  );
}

export default Main;