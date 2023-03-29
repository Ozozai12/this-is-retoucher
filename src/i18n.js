import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
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
            'y name is Daria and I really like beautiful shots that convey emotions. These photos remain in our memory for a lifetime - this is the only thing that time will not affect. I have a lot of experience in this field and a million satisfied clients, of which: singers, bloggers, football players, TV presenters, famous models.',
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
          player: 'football player',
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
            "ене звуть Дарія і я дуже люблю красиві кадри, які передають емоції. Ці фотографії залишаються в нашій пам'яті на все життя - це єдине, на що не вплине час. Маю великий досвід у цій сфері та мільйон задоволених клієнтів, серед яких: співаки, блогери, футболісти, телеведучі, відомі моделі.",
          i_work: 'Я працюю в різних сферах, таких як:',
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
      fr: {
        translation: {
          about: 'Sur moi',
          payment: 'Paiement',
          reviews: 'Comments',
          celebrity: 'Célébrités',
          magazines: 'Magazines',
          beauty: 'Beauté',
          pregnancy: 'Grossesse',
          family: 'Famille',
          beforeAfter: 'Avant/Après',
          w: 'B',
          elcome_text: 'ienvenue sur ma page créative ! Content de te voir!',
          m: 'J',
          y_name_text:
            "e m'appelle Daria et j'aime beaucoup les beaux clichés qui véhiculent des émotions. Ces photos restent dans notre mémoire toute une vie - c'est la seule chose que le temps n'affectera pas. J'ai beaucoup d'expérience dans ce domaine et un million de clients satisfaits, dont : des chanteurs, des blogueurs, des footballeurs, des présentateurs de télévision, des mannequins célèbres.",
          i_work: 'Je travaille dans les domaines suivants :',
          studio: 'prise de vue en studio',
          newborn: 'nouveau-nés',
          pregnancy_list: 'grossesse',
          portraits: 'des portraits',
          collages: 'collages',
          beauty_list: 'beauté',
          etc: 'et etc.',
          price_list: 'Liste de prix',
          basic: 'Basique',
          from: 'de',
          high_end: 'Haut de gamme',
          choose_method:
            'Choisissez un mode de paiement pratique pour vous-même',
          media: 'médias de masse',
          model: 'modèle',
          rapper: 'le rappeur',
          player: 'joueur de football',
        },
      },
      de: {
        translation: {
          about: 'Über mich',
          payment: 'Zahlung',
          reviews: 'Bewertungen',
          celebrity: 'Berühmtheit',
          magazines: 'Zeitschriften',
          beauty: 'Schönheit',
          pregnancy: 'Schwangerschaft',
          family: 'Familie',
          beforeAfter: 'Vorher/Nachher',
          w: 'W',
          elcome_text:
            'llkommen auf meiner Kreativitätsseite! Ich freue mich, Sie zu sehen!',
          m: 'M',
          y_name_text:
            'ein Name ist Daria und ich mag schöne Aufnahmen, die Emotionen vermitteln. Diese Fotos bleiben ein Leben lang in unserer Erinnerung - das ist das einzige, was die Zeit nicht beeinflusst. Ich habe viel Erfahrung in diesem Bereich und eine Million zufriedene Kunden, darunter: Sänger, Blogger, Fußballspieler, Fernsehmoderatoren, berühmte Models.',
          i_work: 'Ich arbeite in verschiedenen Bereichen wie:',
          studio: 'Studio',
          newborn: 'Neugeboren',
          pregnancy_list: 'Schwangerschaft',
          portraits: 'Porträts',
          collages: 'Collagen',
          beauty_list: 'Schönheit',
          etc: 'und ETC.',
          price_list: 'Preisliste',
          basic: 'Basic',
          from: 'von',
          high_end: 'Hochwertig',
          choose_method: 'Wählen Sie eine bequeme Zahlungsmethode für sich',
          media: 'Medien',
          model: 'Modell',
          rapper: 'Rapper',
          player: 'Fußballspieler',
        },
      },
      es: {
        translation: {
          about: 'Acerca de mí',
          payment: 'Pago',
          reviews: 'Reseñas',
          celebrity: 'Celebridad',
          magazines: 'Revistas',
          beauty: 'Belleza',
          pregnancy: 'El embarazo',
          family: 'Familia',
          beforeAfter: 'Antes/Después',
          w: '¡B',
          elcome_text:
            'ienvenido a mi página de creatividad! ¡Me alegro de verte!',
          m: 'M',
          y_name_text:
            'i nombre es Daria y me gustan mucho las tomas hermosas que transmiten emociones. Estas fotos permanecen en nuestra memoria para toda la vida; esto es lo único que no afectará el tiempo. Tengo mucha experiencia en este campo y un millón de clientes satisfechos, de los cuales: cantantes, blogueros, futbolistas, presentadores de televisión, modelos famosos.',
          i_work: 'Trabajo en diferentes áreas como:',
          studio: 'estudio',
          newborn: 'el recién nacido',
          pregnancy_list: 'el embarazo',
          portraits: 'retratos',
          collages: 'collages',
          beauty_list: 'belleza',
          etc: 'y etc.',
          price_list: 'Lista de precios',
          basic: 'Básica',
          from: 'a partir de',
          high_end: 'Gama alta',
          choose_method: 'Elija un método de pago conveniente para usted',
          media: 'medios de comunicación',
          model: 'modelo',
          rapper: 'rapero',
          player: 'Jugador de futbol',
        },
      },
      it: {
        translation: {
          about: 'Su di me',
          payment: 'Pagamento',
          reviews: 'Recensioni',
          celebrity: 'Celebrità',
          magazines: 'Riviste',
          beauty: 'Bellezza',
          pregnancy: 'Gravidanza',
          family: 'Famiglia',
          beforeAfter: 'Prima/Dopo',
          w: 'B',
          elcome_text:
            'envenuti nella mia pagina della creatività! Sono contento di vederti!',
          m: 'M',
          y_name_text:
            "i chiamo Daria e mi piacciono molto gli scatti belli che trasmettono emozioni. Queste foto rimangono nella nostra memoria per tutta la vita: questa è l'unica cosa che il tempo non influirà. Ho molta esperienza in questo campo e un milione di clienti soddisfatti, tra cui: cantanti, blogger, calciatori, conduttrici televisive, modelle famose.",
          i_work: 'Lavoro in diversi ambiti quali:',
          studio: 'studio',
          newborn: 'neonato',
          pregnancy_list: 'gravidanza',
          portraits: 'ritratti',
          collages: 'collage',
          beauty_list: 'bellezza',
          etc: 'e così via.',
          price_list: 'Listino prezzi',
          basic: 'Di base',
          from: 'da',
          high_end: 'Di fascia alta',
          choose_method: 'Scegli un metodo di pagamento conveniente per te',
          media: 'media',
          model: 'modella',
          rapper: 'cantante rap',
          player: 'calciatore',
        },
      },
      sw: {
        translation: {
          about: 'Kuhusu mimi',
          payment: 'Malipo',
          reviews: 'Ukaguzi',
          celebrity: 'Mtu Mashuhuri',
          magazines: 'Magazeti',
          beauty: 'Uzuri',
          pregnancy: 'Mimba',
          family: 'Familia',
          beforeAfter: 'Kabla/Baada',
          w: 'K',
          elcome_text:
            'aribu kwenye ukurasa wangu wa ubunifu! Nimefurahi kukuona!',
          m: 'J',
          y_name_text:
            'ina langu ni Daria na napenda sana picha nzuri zinazowasilisha hisia. Picha hizi zinabaki kwenye kumbukumbu zetu kwa maisha yote - hii ndio kitu pekee ambacho wakati hautaathiri. Nina uzoefu mwingi katika uwanja huu na wateja milioni walioridhika, ambao: waimbaji, wanablogu, wachezaji wa mpira wa miguu, watangazaji wa Runinga, wanamitindo maarufu.',
          i_work: 'Ninafanya kazi katika maeneo tofauti kama vile:',
          studio: 'studio',
          newborn: 'mtoto mchanga',
          pregnancy_list: 'mimba',
          portraits: 'picha',
          collages: 'kolagi',
          beauty_list: 'uzuri',
          etc: 'na nk.',
          price_list: 'Orodha ya bei',
          basic: 'Msingi',
          from: 'kutoka',
          high_end: 'Ya hali ya juu',
          choose_method: 'Chagua njia rahisi ya kulipa kwako',
          media: 'vyombo vya habari',
          model: 'mfano',
          rapper: 'rapa',
          player: 'mchezaji wa mpira wa miguu',
        },
      },
    },
  });

export default i18n;
