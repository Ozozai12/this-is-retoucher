import React, { useState } from 'react';
import { Lightbox } from 'components/Lightbox/Lightbox';
import { Footer } from 'components/Footer/Footer';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { useTranslation } from 'react-i18next';

import css from './BeforeAfter.module.css';

export function BeforeAfter() {
  const [toggler, setToggler] = useState(false);
  const [url, setUrl] = useState('');
  const { t } = useTranslation();

  return (
    <>
      <Lightbox toggler={toggler} url={url} />
      <div className={css.container}>
        <h1 className={css.pageTitle}>{t('beforeAfter')}</h1>
        <div className={css.pageContainer}>
          <div className={css.leftColumn}>
            <img
              src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678789199/this-is-retoucher/before-after/bef1_vtkkxr.jpg"
              alt="whitehair woman before"
              className={css.beforeafterPhoto}
              onClick={e => {
                setToggler(!toggler);
                setUrl(e.currentTarget.src);
              }}
            />
            <img
              src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678789198/this-is-retoucher/before-after/af1_zzhp2k.jpg"
              alt="whitehair woman after"
              className={css.beforeafterPhoto}
              onClick={e => {
                setToggler(!toggler);
                setUrl(e.currentTarget.src);
              }}
            />
            <img
              src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678789199/this-is-retoucher/before-after/bef2_kfg1n7.jpg"
              alt="woman painter before"
              className={css.beforeafterPhoto}
              onClick={e => {
                setToggler(!toggler);
                setUrl(e.currentTarget.src);
              }}
            />
            <img
              src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678789198/this-is-retoucher/before-after/af2_ufft4b.jpg"
              alt="woman painter after"
              className={css.beforeafterPhoto}
              onClick={e => {
                setToggler(!toggler);
                setUrl(e.currentTarget.src);
              }}
            />
            <img
              src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678789199/this-is-retoucher/before-after/bef3_iml8tn.jpg"
              alt="black women closed eyes before"
              className={css.beforeafterPhoto}
              onClick={e => {
                setToggler(!toggler);
                setUrl(e.currentTarget.src);
              }}
            />
            <img
              src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678789198/this-is-retoucher/before-after/af3_fcpszg.jpg"
              alt="black women closed eyes after"
              className={css.beforeafterPhoto}
              onClick={e => {
                setToggler(!toggler);
                setUrl(e.currentTarget.src);
              }}
            />
          </div>
          <div className={css.rightColumn}>
            <img
              src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678789199/this-is-retoucher/before-after/bef4_pr3ea5.jpg"
              alt="black women before"
              width={281}
              className={css.beforeafterPhoto}
              onClick={e => {
                setToggler(!toggler);
                setUrl(e.currentTarget.src);
              }}
            />
            <img
              src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678789198/this-is-retoucher/before-after/af4_g8eorb.jpg"
              alt="black women after"
              className={css.beforeafterPhoto}
              onClick={e => {
                setToggler(!toggler);
                setUrl(e.currentTarget.src);
              }}
            />
            <img
              src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678789199/this-is-retoucher/before-after/bef5_kb4ube.jpg"
              alt="woman with earrings before"
              className={css.beforeafterPhoto}
              onClick={e => {
                setToggler(!toggler);
                setUrl(e.currentTarget.src);
              }}
            />
            <img
              src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678789198/this-is-retoucher/before-after/af5_drghli.jpg"
              alt="woman with earrings after"
              className={css.beforeafterPhoto}
              onClick={e => {
                setToggler(!toggler);
                setUrl(e.currentTarget.src);
              }}
            />
            <img
              src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678789199/this-is-retoucher/before-after/bef6_txqgat.jpg"
              alt="woman in swimsuit before"
              className={css.beforeafterPhoto}
              onClick={e => {
                setToggler(!toggler);
                setUrl(e.currentTarget.src);
              }}
            />
            <img
              src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678789198/this-is-retoucher/before-after/af6_t2kilj.jpg"
              alt="woman in swimsuit after"
              className={css.beforeafterPhoto}
              onClick={e => {
                setToggler(!toggler);
                setUrl(e.currentTarget.src);
              }}
            />
          </div>
        </div>
      </div>
      <Sidebar variant="before-after" />
      <Footer />
    </>
  );
}
