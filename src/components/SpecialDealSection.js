import React from 'react';
import { Link } from 'react-router';
import deal01 from '../assets/images/deal_01.jpg';
import deal02 from '../assets/images/deal_02.jpg';
import deal03 from '../assets/images/deal_03.jpg';
import deal04 from '../assets/images/deal_04.jpg';
import '../pages/css/SpecialDealSection.css';

const DEAL_PRODUCTS = [
  {
    id: 1,
    badge: '+10% 쿠폰',
    image: deal01,
    title: '[KF365] 무항생제 1등급 한우 등심 구이용 300g (냉장)',
    originalPrice: 34900,
    discountRate: 28,
    salePrice: 24900,
    reviewCount: '9,999+',
  },
  {
    id: 2,
    badge: '단독특가',
    image: deal02,
    title: '[연세우유 x 마켓컬리] 전용목장우유 900mL',
    originalPrice: 3200,
    discountRate: 15,
    salePrice: 2720,
    reviewCount: '9,999+',
  },
  {
    id: 3,
    badge: '+15% 쿠폰',
    image: deal03,
    title: '[이연복의 목란] 짬뽕 2인분 (맵기선택)',
    originalPrice: 13500,
    discountRate: 20,
    salePrice: 10800,
    reviewCount: '9,999+',
  },
  {
    id: 4,
    badge: '',
    image: deal04,
    title: '[귤로장생] 타이벡 감귤 2.5kg (로얄과)',
    originalPrice: 19900,
    discountRate: 35,
    salePrice: 12900,
    reviewCount: '5,420',
  },
];

function SpecialDealSection() {
  const handleAddCart = (e, product) => {
    e.preventDefault();
    alert(`'${product.title}' 상품을 장바구니에 담았습니다.`);
  };

  return (
    <section className="special_deal_section">
      <div className="section_inner">
        {/* 섹션 타이틀 영역 */}
        <div className="section_header">
          <Link to="/benefit" className="title_link">
            <h2>지금 가장 많이 담는 특가</h2>
            <i className="fa-solid fa-chevron-right"></i>
          </Link>
          <p className="sub_title">컬리 추천 특가템 최대 50%</p>
        </div>

        {/* 상품 리스트 영역 */}
        <div className="product_slider_wrap">
          <div className="product_list">
            {DEAL_PRODUCTS.map((item) => (
              <article key={item.id} className="product_card">
                <Link to={`/product/${item.id}`} className="card_link">
                  {/* 썸네일 박스 */}
                  <div className="thumb_area">
                    <img src={item.image} alt={item.title} />
                    {item.badge && <span className="promo_badge">{item.badge}</span>}
                  </div>

                  {/* 장바구니 담기 버튼 */}
                  <button
                    type="button"
                    className="cart_add_btn"
                    onClick={(e) => handleAddCart(e, item)}
                  >
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span>담기</span>
                  </button>

                  {/* 상품 정보 */}
                  <div className="info_area">
                    <h3 className="product_name">{item.title}</h3>

                    <div className="price_box">
                      {item.discountRate > 0 && (
                        <span className="origin_price">
                          {item.originalPrice.toLocaleString()}원
                        </span>
                      )}
                      <div className="final_price_row">
                        {item.discountRate > 0 && (
                          <span className="discount_rate">{item.discountRate}%</span>
                        )}
                        <strong className="sale_price">
                          {item.salePrice.toLocaleString()}원
                        </strong>
                      </div>
                    </div>

                    <div className="review_row">
                      <i className="fa-regular fa-comment-dots"></i>
                      <span>후기 {item.reviewCount}</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpecialDealSection;