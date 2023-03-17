import { Sidebar } from 'components/Sidebar/Sidebar';
import css from './Beauty.module.css';

export function Beauty() {
  return (
    <div className={css.container}>
      <Sidebar variant="beauty" />
      <h1 className={css.pageTitle}>Beauty</h1>
      <div className={css.pageContainerUpper}>
        <div className={css.assetContainerOne}>
          <img
            src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678732241/this-is-retoucher/beauty1_ejgdfc.jpg"
            alt="woman face"
            className={css.photoOne}
          />
          <div className={css.frameOne} />
          <span className={css.titleOne}>This is retoucher</span>
        </div>
        <div className={css.assetContainerTwo}>
          <img
            src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678732241/this-is-retoucher/beauty2_hphoyh.jpg"
            alt="woman ear"
            className={css.photoTwo}
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
          />
          <div className={css.frameFour} />
          <span className={css.titleFour}>photo</span>
          <span className={css.titleFive}>retoucheretoucher</span>
        </div>
      </div>
    </div>
  );
}
