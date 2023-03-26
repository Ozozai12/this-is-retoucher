import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: false,
    fallbackLng: 'en',
    // interpolation: {
    //   escapeValue: false, // not needed for react as it escapes by default
    // },
    resources: {
      en: {
        translation: {
          about: 'About me',
          payment: 'Payment',
          reviews: 'Reviews',
          celebrity: 'Celebrity',
          magazines: 'Magazines',
          beauty: 'Beauty',
          pregnancy: 'Pregnancy',
          family: 'Family',
          beforeAfter: 'Before/After',
          w: 'W',
          elcome_text: "elcome to my creativity page! I'm glad to see you!",
          m: 'M',
          y_name_text:
            'y name is Daria and I really love beautiful shots that convey emotions and these photographs remain in our memory for life - this is the only thing that we can save without changing the time. I have a lot of experience in this field and a million satisfied clients, of which: singers, bloggers, football players, TV presenters, famous models.',
          i_work: 'I work in different areas such as:',
          studio: 'studio',
          newborn: 'newborn',
          pregnancy_list: 'pregnancy',
          portraits: 'portraits',
          collages: 'collages',
          beauty_list: 'beauty',
          etc: 'and etc.',
          price_list: 'Price list',
          basic: 'Basic',
          from: 'from',
          high_end: 'High-end',
          choose_method: 'Choose a convenient payment method for yourself',
          media: 'media',
          model: 'model',
          rapper: 'rapper',
          player: 'rootball player',
        },
      },
      uk: {
        translation: {
          about: 'Про мене',
          payment: 'Оплата',
          reviews: 'Відгуки',
          celebrity: 'Знаменитості',
          magazines: 'Журнали',
          beauty: 'Краса',
          pregnancy: 'Вагітність',
          family: "Сім'я",
          beforeAfter: 'До/Після',
          w: 'Л',
          elcome_text:
            'аскаво запрошую до своєї творчої сторінки! Рада вас бачити!',
          m: 'M',
          y_name_text:
            "ене звати Дар'я, і я дуже люблю красиві кадри, які передають емоції. І ці фотографії залишаються в пам'яті на все життя - це єдине, що лишається незмінним. Я маю великий досвід у цій сфері та мільйон задоволених клієнтів, серед яких: співаки, блогери, футболісти, телеведучі, та відомі моделі.",
          i_work: 'Я працюю в наступних галузях:',
          studio: 'студійна зйомка',
          newborn: 'новонароджені',
          pregnancy_list: 'вагітність',
          portraits: 'портрети',
          collages: 'колажі',
          beauty_list: 'краса',
          etc: 'та інші',
          price_list: 'Прайс лист',
          basic: 'Базова',
          from: 'від',
          high_end: 'Висококласна',
          choose_method: 'Оберіть для себе зручний спосіб оплати',
          media: 'ЗМІ',
          model: 'модель',
          rapper: 'репер',
          player: 'футбольний гравець',
        },
      },
    },
  });

export default i18n;
