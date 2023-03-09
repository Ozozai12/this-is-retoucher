import { Sidebar } from 'components/Sidebar/Sidebar';
import css from './General.module.css';

export function General() {
  return (
    <div className={css.container}>
      <Sidebar />
      <div className={css.pageContainer}>
        <div className={css.frameOne}>
          <span className={css.titleOne}>This is retoucher</span>
        </div>
        <div className={css.frameTwo}>
          <span className={css.titleTwo}>retouch</span>
          <span className={css.titleThree}>photo</span>
        </div>
        <div className={css.frameThree}>
          <span className={css.titleFour}>retoucheretoucher</span>
        </div>
        <div className={css.photoOne}>
          <img
            src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678224123/this-is-retoucher/gen1_spauje.jpg"
            alt="women1"
          />
        </div>
        <div className={css.photoTwo}>
          <img
            src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678224122/this-is-retoucher/gen2_hofj1a.jpg"
            alt="women2"
          />
        </div>
        <div className={css.photoThree}>
          <img
            src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678224122/this-is-retoucher/gen3_skffnl.jpg"
            alt="women3"
          />
        </div>
      </div>
    </div>
  );
}
