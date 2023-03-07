import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout';
import { GeneralPage } from 'pages/General';
import { AboutPage } from 'pages/About';
import { PaymentPage } from 'pages/Payment';
import { ReviewsPage } from 'pages/Reviews';
import { CelebrityPage } from 'pages/Celebrity';
import { MagazinesPage } from 'pages/Magazines';
import { BeautyPage } from 'pages/Beauty';
import { PregnancyPage } from 'pages/Pregnancy';
import { FamilyPage } from 'pages/Family';
import { BeforeAfterPage } from 'pages/BeforeAfter';
import { EighteenPage } from 'pages/Eighteen';

import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.appWrapper}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<GeneralPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
          <Route path="celebrity" element={<CelebrityPage />} />
          <Route path="magazines" element={<MagazinesPage />} />
          <Route path="beauty" element={<BeautyPage />} />
          <Route path="pregnancy" element={<PregnancyPage />} />
          <Route path="family" element={<FamilyPage />} />
          <Route path="before-after" element={<BeforeAfterPage />} />
          <Route path="18+" element={<EighteenPage />} />
        </Route>
      </Routes>
    </div>
  );
};
