import * as React from 'react';
import { Sidebar } from 'components/Sidebar/Sidebar';
import css from './Reviews.module.css';
import { HiArrowCircleRight, HiArrowCircleLeft } from 'react-icons/hi';
import { IconContext } from 'react-icons';

import Glider from 'react-glider';
import 'glider-js/glider.css';

export function Reviews() {
  return (
    <div className={css.reviewsSection}>
      <div className={css.container}>
        <h1 className={css.pageTitle}>Reviews</h1>
        <Sidebar variant="reviews" />
      </div>
      <div className={css.laptopContainer}>
        <div className={css.laptop}>
          <div className={css.laptopScreen}>
            <div className={css.gliderContainer}>
              <Glider
                iconLeft={
                  <IconContext.Provider value={{ className: css.arrow }}>
                    <HiArrowCircleLeft />
                  </IconContext.Provider>
                }
                iconRight={
                  <IconContext.Provider value={{ className: css.arrow }}>
                    <HiArrowCircleRight />
                  </IconContext.Provider>
                }
                draggable
                hasArrows
                slidesToShow={3}
                slidesToScroll={3}
              >
                <div className={css.reviewCard}>
                  <img
                    src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678388076/this-is-retoucher/reviews/rev1_ovibqv.jpg"
                    alt="review1"
                    className={css.reviewImage}
                  />
                </div>
                <div className={css.reviewCard}>
                  <img
                    src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678388076/this-is-retoucher/reviews/rev2_pbu8nz.jpg"
                    alt="review2"
                    className={css.reviewImage}
                  />
                </div>
                <div className={css.reviewCard}>
                  <img
                    src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678388076/this-is-retoucher/reviews/rev3_yzw6ft.jpg"
                    alt="review3"
                    className={css.reviewImage}
                  />
                </div>
                <div className={css.reviewCard}>
                  <img
                    src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678388076/this-is-retoucher/reviews/rev4_ijflbq.jpg"
                    alt="review4"
                    className={css.reviewImage}
                  />
                </div>
                <div className={css.reviewCard}>
                  <img
                    src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678388077/this-is-retoucher/reviews/rev5_lcdmfb.jpg"
                    alt="review5"
                    className={css.reviewImage}
                  />
                </div>
                <div className={css.reviewCard}>
                  <img
                    src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678388077/this-is-retoucher/reviews/rev6_j9v6ng.jpg"
                    alt="review6"
                    className={css.reviewImage}
                  />
                </div>
                <div className={css.reviewCard}>
                  <img
                    src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678388077/this-is-retoucher/reviews/rev7_uxbazt.jpg"
                    alt="review7"
                    className={css.reviewImage}
                  />
                </div>
                <div className={css.reviewCard}>
                  <img
                    src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678388077/this-is-retoucher/reviews/rev8_wnpesy.jpg"
                    alt="review8"
                    className={css.reviewImage}
                  />
                </div>
                <div className={css.reviewCard}>
                  <img
                    src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678388077/this-is-retoucher/reviews/rev9_f5fhym.jpg"
                    alt="review9"
                    className={css.reviewImage}
                  />
                </div>
              </Glider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
