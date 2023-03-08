import { Sidebar } from 'components/Sidebar/Sidebar';
import css from './Payment.module.css';

export function Payment() {
  return (
    <div className={css.container}>
      <Sidebar />
      <div className={css.pageContainer}>
        <div className={css.priceContainer}>
          <div className={css.priceThumb}>
            <span className={css.thumbText}>Price list</span>{' '}
          </div>
          <div className={css.imageThumb}>
            <div className={css.imageContainer}>
              <img
                src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678298056/this-is-retoucher/pay1_shnybz.jpg"
                alt="pregnant women with flowers"
              />
              <span className={css.priceTitle}>Basic</span>
              <span className={css.priceValue}>from 5$</span>
            </div>
            <div className={css.imageContainer}>
              <img
                src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678298071/this-is-retoucher/pay2_qvcsk0.jpg"
                alt="woman's portrait"
              />
              <span className={css.priceTitle}>High-end</span>
              <span className={css.priceValue}>from 12$</span>
            </div>
          </div>
        </div>
        <div>
          <div className={css.payContainer}>
            <div className={css.payThumb}>
              <span className={css.thumbText}>
                Choose a convenient payment method for yourself
              </span>
            </div>
            <div className={css.iphoneFrame}>
              <div className={css.iphoneScreen}>
                <a
                  href="https://www.paypal.com/ru/home"
                  className={css.payItem}
                >
                  <img
                    src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678304138/this-is-retoucher/payment/PayPal_mgbs6w.jpg"
                    alt="paypal"
                  />
                  <span className={css.payTitle}>PayPal</span>
                </a>
                <a
                  href="https://www.paypal.com/ru/home"
                  className={css.payItem}
                >
                  <img
                    src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678304138/this-is-retoucher/payment/Go_hpornv.jpg"
                    alt="transfergo"
                  />
                  <span className={css.payTitle}>TransferGo</span>
                </a>
                <a
                  href="https://www.paypal.com/ru/home"
                  className={css.payItem}
                >
                  <img
                    src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678304138/this-is-retoucher/payment/MoneyGram_gdsqxi.jpg"
                    alt="moneygram"
                  />
                  <span className={css.payTitle}>MoneyGram</span>
                </a>
                <a
                  href="https://www.paypal.com/ru/home"
                  className={css.payItem}
                >
                  <img
                    src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678304138/this-is-retoucher/payment/paysend_bh0wmn.jpg"
                    alt="paysend"
                  />
                  <span className={css.payTitle}>Paysend</span>
                </a>
                <a
                  href="https://www.paypal.com/ru/home"
                  className={css.payItem}
                >
                  <img
                    src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678304139/this-is-retoucher/payment/wise_dijh2n.jpg"
                    alt="wise"
                  />
                  <span className={css.payTitle}>Wise</span>
                </a>
                <a
                  href="https://www.paypal.com/ru/home"
                  className={css.payItem}
                >
                  <img
                    src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678304138/this-is-retoucher/payment/easysend_enxzm3.jpg"
                    alt="easysend"
                  />
                  <span className={css.payTitle}>EasySend</span>
                </a>
                <a
                  href="https://www.paypal.com/ru/home"
                  className={css.payItem}
                >
                  <img
                    src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678304139/this-is-retoucher/payment/western-union-logo-high-res-11563546722x1pkn9b2ds_1_stmtm6.jpg"
                    alt="westernUnion"
                  />
                  <span className={css.payTitle}>WesternUnion</span>
                </a>
              </div>
              <img
                src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678301482/this-is-retoucher/Iphone_s12k6q.png"
                alt="iphone"
                className={css.iphone}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
