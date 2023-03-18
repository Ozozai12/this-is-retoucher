import { Sidebar } from 'components/Sidebar/Sidebar';
import css from './Eighteen.module.css';

export function Eighteen() {
  return (
    <div className={css.container}>
      <Sidebar variant="eighteen" />
      <h1 className={css.pageTitle}>18+</h1>
      <div className={css.pageContainer}>
        <div className={css.columnContainerOne}>
          <img
            src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678790466/this-is-retoucher/18/img1_amqzkx.jpg"
            alt="woman1"
            className={css.eighteenPhoto}
          />
          <img
            src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678790466/this-is-retoucher/18/img5_pizhdl.jpg"
            alt="woman2"
            className={css.eighteenPhoto}
          />
        </div>
        <div className={css.columnContainerTwo}>
          <img
            src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678790466/this-is-retoucher/18/img2_b4k0a6.jpg"
            alt="woman3"
            className={css.eighteenPhoto}
          />
          <img
            src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678790466/this-is-retoucher/18/img6_byr7ab.jpg"
            alt="woman4"
            className={css.eighteenPhoto}
          />
        </div>
        <div className={css.columnContainerThree}>
          <img
            src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678790466/this-is-retoucher/18/img3_kpc2vf.jpg"
            alt="woman5"
            className={css.eighteenPhoto}
          />
          <img
            src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678790466/this-is-retoucher/18/img7_lydci7.jpg"
            alt="woman6"
            className={css.eighteenPhoto}
          />
        </div>
        <div className={css.columnContainerFour}>
          <img
            src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678790466/this-is-retoucher/18/img4_bm1hf5.jpg"
            alt="woman7"
            className={css.eighteenPhoto}
          />
          <img
            src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678790466/this-is-retoucher/18/img8_va05eu.jpg"
            alt="woman8"
            className={css.eighteenPhoto}
          />
          <div className={css.doublePhotoContainer}>
            <img
              src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678790466/this-is-retoucher/18/img9_ng1jwu.jpg"
              alt="woman9"
              className={css.eighteenPhoto}
              width={95}
              style={{ height: 156 }}
            />
            <img
              src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678790466/this-is-retoucher/18/img10_iwrlsc.jpg"
              alt="woman10"
              className={css.eighteenPhoto}
              width={131}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
