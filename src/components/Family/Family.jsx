import { Sidebar } from 'components/Sidebar/Sidebar';
import css from './Family.module.css';

export function Family() {
  return (
    <div className={css.container}>
      <Sidebar variant="family" />
      <h1 className={css.pageTitle}>Family</h1>
      <div className={css.pageContainer}>
        <div className={css.columnContainerOne}>
          <img
            src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678787063/this-is-retoucher/family/fam1_ywnn2o.jpg"
            alt="woman in black dress"
            className={css.familyPhoto}
          />
          <img
            src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678787063/this-is-retoucher/family/fam5_lsm8ee.jpg"
            alt="woman and man kissing"
            className={css.familyPhoto}
          />
        </div>
        <div className={css.columnContainerTwo}>
          <img
            src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678787063/this-is-retoucher/family/fam2_xtxrfy.jpg"
            alt="woman in leopard dress sitting"
            className={css.familyPhoto}
          />
          <img
            src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678787063/this-is-retoucher/family/fam6_jvggaq.jpg"
            alt="woman in white dress"
            className={css.familyPhoto}
          />
        </div>
        <div className={css.columnContainerThree}>
          <img
            src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678787063/this-is-retoucher/family/fam3_xlz1eb.jpg"
            alt="woman in white mini"
            className={css.familyPhoto}
          />
          <img
            src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678787064/this-is-retoucher/family/fam7_ckcep3.jpg"
            alt="woman in leopard dress front"
            className={css.familyPhoto}
          />
        </div>
        <div className={css.columnContainerFour}>
          <img
            src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678787064/this-is-retoucher/family/fam4_bhacrg.jpg"
            alt="woman in silk dress"
            className={css.familyPhoto}
          />
          <img
            src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678787063/this-is-retoucher/family/fam8_uhninf.jpg"
            alt="man and woman hugs"
            className={css.familyPhoto}
          />
        </div>
      </div>
    </div>
  );
}
