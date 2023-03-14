import { Sidebar } from 'components/Sidebar/Sidebar';
import css from './BeforeAfter.module.css';

export function BeforeAfter() {
  return (
    <div className={css.container}>
      <Sidebar />
      <div className={css.pageContainer}>
        <div className={css.leftColumn}>
          <img
            src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678789199/this-is-retoucher/before-after/bef1_vtkkxr.jpg"
            alt="whitehair woman before"
            width={281}
            className={css.beforeafterPhoto}
          />
          <img
            src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678789198/this-is-retoucher/before-after/af1_zzhp2k.jpg"
            alt="whitehair woman after"
            width={281}
            className={css.beforeafterPhoto}
          />
          <img
            src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678789199/this-is-retoucher/before-after/bef2_kfg1n7.jpg"
            alt="woman painter before"
            width={281}
            className={css.beforeafterPhoto}
          />
          <img
            src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678789198/this-is-retoucher/before-after/af2_ufft4b.jpg"
            alt="woman painter after"
            width={281}
            className={css.beforeafterPhoto}
          />
          <img
            src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678789199/this-is-retoucher/before-after/bef3_iml8tn.jpg"
            alt="black women closed eyes before"
            width={255}
            className={css.beforeafterPhoto}
          />
          <img
            src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678789198/this-is-retoucher/before-after/af3_fcpszg.jpg"
            alt="black women closed eyes after"
            width={255}
            className={css.beforeafterPhoto}
          />
        </div>
        <div className={css.rightColumn}>
          <img
            src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678789199/this-is-retoucher/before-after/bef4_pr3ea5.jpg"
            alt="black women before"
            width={281}
            className={css.beforeafterPhoto}
          />
          <img
            src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678789198/this-is-retoucher/before-after/af4_g8eorb.jpg"
            alt="black women after"
            width={281}
            className={css.beforeafterPhoto}
          />
          <img
            src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678789199/this-is-retoucher/before-after/bef5_kb4ube.jpg"
            alt="woman with earrings before"
            width={281}
            className={css.beforeafterPhoto}
          />
          <img
            src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678789198/this-is-retoucher/before-after/af5_drghli.jpg"
            alt="woman with earrings after"
            width={281}
            className={css.beforeafterPhoto}
          />
          <img
            src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678789199/this-is-retoucher/before-after/bef6_txqgat.jpg"
            alt="woman in swimsuit before"
            width={255}
            className={css.beforeafterPhoto}
          />
          <img
            src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678789198/this-is-retoucher/before-after/af6_t2kilj.jpg"
            alt="woman in swimsuit after"
            width={255}
            className={css.beforeafterPhoto}
          />
        </div>
      </div>
    </div>
  );
}
