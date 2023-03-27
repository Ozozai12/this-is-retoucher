import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import css from './App.module.css';

import { Layout } from './Layout';

const GeneralPage = lazy(() => import('../pages/General'));
const AboutPage = lazy(() => import('../pages/About'));
const PaymentPage = lazy(() => import('../pages/Payment'));
const ReviewsPage = lazy(() => import('../pages/Reviews'));
const CelebrityPage = lazy(() => import('../pages/Celebrity'));
const MagazinesPage = lazy(() => import('../pages/Magazines'));
const BeautyPage = lazy(() => import('../pages/Beauty'));
const PregnancyPage = lazy(() => import('../pages/Pregnancy'));
const FamilyPage = lazy(() => import('../pages/Family'));
const BeforeAfterPage = lazy(() => import('../pages/BeforeAfter'));
const EighteenPage = lazy(() => import('../pages/Eighteen'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

// import { GeneralPage } from 'pages/General';
// import { AboutPage } from 'pages/About';
// import { PaymentPage } from 'pages/Payment';
// import { ReviewsPage } from 'pages/Reviews';
// import { CelebrityPage } from 'pages/Celebrity';
// import { MagazinesPage } from 'pages/Magazines';
// import { BeautyPage } from 'pages/Beauty';
// import { PregnancyPage } from 'pages/Pregnancy';
// import { FamilyPage } from 'pages/Family';
// import { BeforeAfterPage } from 'pages/BeforeAfter';
// import { EighteenPage } from 'pages/Eighteen';
// import { NotFoundPage } from 'pages/NotFound';

export const App = () => {
  return (
    <Suspense fallback="loading...">
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
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Suspense>
  );
};
