import React, { useState } from 'react';
import { Lightbox } from 'components/Lightbox/Lightbox';
import { Footer } from 'components/Footer/Footer';
import { Sidebar } from 'components/Sidebar/Sidebar';
import css from './Beauty.module.css';

export function Beauty() {
  const [toggler, setToggler] = useState(false);
  const [url, setUrl] = useState('');

  return (
    <>
      <Lightbox toggler={toggler} url={url} />
      <div className={css.container}>
        <h1 className={css.pageTitle}>Beauty</h1>
        <div className={css.pageContainerUpper}>
          <div className={css.assetContainerOne}>
            <img
              src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678732241/this-is-retoucher/beauty1_ejgdfc.jpg"
              alt="woman face"
              className={css.photoOne}
              onClick={e => {
                setToggler(!toggler);
                setUrl(e.currentTarget.src);
              }}
            />
            <div className={css.frameOne} />
            <span className={css.titleOne}>This is retoucher</span>
          </div>
          <div className={css.assetContainerTwo}>
            <img
              src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678732241/this-is-retoucher/beauty2_hphoyh.jpg"
              alt="woman ear"
              className={css.photoTwo}
              onClick={e => {
                setToggler(!toggler);
                setUrl(e.currentTarget.src);
              }}
            />
            <div className={css.frameTwo} />
            <span className={css.titleTwo}>retouch</span>
          </div>
        </div>
        <div className={css.pageContainerLower}>
          <div className={css.assetContainerThree}>
            <img
              src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678732242/this-is-retoucher/beauty3_tihscp.jpg"
              alt="woman flowers"
              className={css.photoThree}
              onClick={e => {
                setToggler(!toggler);
                setUrl(e.currentTarget.src);
              }}
            />
            <div className={css.frameThree} />
            <span className={css.titleThreeDesktop}>retoucheretoucher</span>
            <span className={css.titleThreeTablet}>retoucher</span>
          </div>
          <div className={css.assetContainerFour}>
            <img
              src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678732241/this-is-retoucher/beauty4_mbkzrr.jpg"
              alt="woman makeup"
              className={css.photoFour}
              onClick={e => {
                setToggler(!toggler);
                setUrl(e.currentTarget.src);
              }}
            />
            <div className={css.frameFour} />
            <span className={css.titleFour}>photo</span>
            <span className={css.titleFive}>retoucheretoucher</span>
          </div>
        </div>
      </div>
      <Sidebar variant="beauty" />
      <Footer />
    </>
  );
}
