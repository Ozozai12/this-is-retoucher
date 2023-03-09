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
                slidesToScroll={1}
              >
                <div className={css.reviewCard}>
                  <img
                    src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678367816/this-is-retoucher/reviews/review-1_nmwfzl.jpg"
                    alt="review1"
                  />
                </div>
                <div className={css.reviewCard}>
                  <img
                    src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678367816/this-is-retoucher/reviews/review-1_nmwfzl.jpg"
                    alt="review1"
                  />
                </div>
                <div className={css.reviewCard}>
                  <img
                    src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678367816/this-is-retoucher/reviews/review-1_nmwfzl.jpg"
                    alt="review1"
                  />
                </div>
                <div className={css.reviewCard}>
                  <img
                    src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678367816/this-is-retoucher/reviews/review-1_nmwfzl.jpg"
                    alt="review1"
                  />
                </div>
                <div className={css.reviewCard}>
                  <img
                    src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678367816/this-is-retoucher/reviews/review-1_nmwfzl.jpg"
                    alt="review1"
                  />
                </div>
              </Glider>
            </div>
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  );
}
