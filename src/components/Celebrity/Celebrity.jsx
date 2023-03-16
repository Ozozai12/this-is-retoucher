import { Sidebar } from 'components/Sidebar/Sidebar';
import css from './Celebrity.module.css';

export function Celebrity() {
  return (
    <div className={css.container}>
      <Sidebar variant="celebrity" />
      <h1 className={css.pageTitle}>Celebrity</h1>
      <div className={css.pageContainer}>
        <div className={css.assetContainerOne}>
          <img
            src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678392548/this-is-retoucher/celeb1_qe2cag.jpg"
            alt="women sitting"
            className={css.photoOne}
          />
          <div className={css.frameOne} />
          <span className={css.titleOne}>This is retoucher</span>
          <span className={css.nameOne}>
            Channah Koerten
            <span className={css.roleOne}>
              <br /> media
            </span>
          </span>
        </div>
        <div className={css.assetContainerTwo}>
          <img
            src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678392548/this-is-retoucher/celeb2_xcxbhg.jpg"
            alt="woman blackhair"
            className={css.photoTwo}
          />
          <div className={css.frameTwo} />
          <span className={css.titleTwo}>retouch</span>
          <span className={css.nameTwo}>
            Penthesilea
            <span className={css.roleTwo}>model</span>
          </span>
        </div>
        <div className={css.assetContainerThree}>
          <img
            src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678392548/this-is-retoucher/celeb3_qtivqc.jpg"
            alt="50 cent"
            className={css.photoThree}
          />
          <div className={css.frameThree} />
          <span className={css.titleThree}>retoucheretoucher</span>
          <span className={css.nameThree}>
            50 cent<span className={css.roleThree}>rapper</span>
          </span>
        </div>
        <div className={css.assetContainerFour}>
          <img
            src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678392548/this-is-retoucher/celeb4_x5qd2u.jpg"
            alt="man and women"
            className={css.photoFour}
          />
          <div className={css.frameFour} />
          <span className={css.titleFour}>photo</span>
          <span className={css.nameFour}>
            Tonny Vilhena<span className={css.roleFour}>football player</span>
          </span>
        </div>
      </div>
    </div>
  );
}
