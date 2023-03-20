import { Sidebar } from 'components/Sidebar/Sidebar';
import { Footer } from 'components/Footer/Footer';
import css from './About.module.css';

export function About() {
  return (
    <>
      <div className={css.container}>
        <h1 className={css.pageTitle}>About me</h1>
        <div className={css.pageContainer}>
          <div className={css.textFrame}>
            <div className={css.textContainer}>
              <span className={css.welcomeText}>
                <span className={css.firstLetter}>W</span>
                elcome to my creativity page! I'm glad to see you!
                <br />
                <span className={css.firstLetter}>M</span>y name is Daria and I
                really love beautiful shots that convey emotions and these
                photographs remain in our memory for life - this is the only
                thing that we can save without changing the time. I have a lot
                of experience in this field and a million satisfied clients, of
                which: singers, bloggers, football players, TV presenters,
                famous models.
                <br />
                I work in different areas such as:
                <br />
                <span className={css.welcomeList}>
                  -studio
                  <br />
                  -newborn
                  <br />
                  -pregnancy
                  <br />
                  -portraits
                  <br />
                  -collages
                  <br />
                  -beauty
                  <br />
                  and etc.
                </span>
              </span>
            </div>
          </div>
          <div className={css.tapeContainer}>
            <span className={css.tapeTextOne}>This is retoucher</span>
            <span className={css.tapeTextTwo}>photo</span>
            <img
              src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678389304/this-is-retoucher/photo-tape_o3vk4o.png"
              alt="tape"
              className={css.tape}
            />
            <img
              src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678389295/this-is-retoucher/about1_u0nvqt.jpg"
              alt="women no hat"
              className={css.photoOneDesktop}
            />
            <img
              src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1679325389/this-is-retoucher/about1Mobile_mpqmjx.jpg"
              alt="women no hat"
              className={css.photoOneMobile}
            />
            <img
              src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678389295/this-is-retoucher/aout2_zencjq.jpg"
              alt="women sitting"
              className={css.photoTwoDesktop}
            />
            <img
              src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1679323925/this-is-retoucher/about2Mobile_uww65j.jpg"
              alt="women sitting"
              className={css.photoTwoMobile}
            />
            <img
              src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678389295/this-is-retoucher/about3_kg8wvb.jpg"
              alt="women with hat"
              className={css.photoThree}
            />
            <img
              src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1678389295/this-is-retoucher/about4_h0ksfm.jpg"
              alt="women sleeps tiny"
              className={css.photoFour}
            />
            <span className={css.tapeTextPS}>
              <span className={css.tapeTextPSAccent}>P.S.</span> Once you try
              it, you can be happy for life.
            </span>
          </div>
        </div>
      </div>
      <Sidebar variant="about" />
      <Footer />
    </>
  );
}
