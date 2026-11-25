import React from 'react';
import { Link } from 'react-router';
import '../pages/css/MidBanner.css';
import line_banner from '../assets/images/line_banner.jpg';

function MidBanner() {
  return (
    <section className="mid_banner">
      <div className="mid_banner_inner">
        <Link to="/benefit" className="banner_link">
          <img
            src={line_banner}
            alt="프로모션 배너"
          />
        </Link>
      </div>
    </section>
  );
}

export default MidBanner;