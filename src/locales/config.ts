import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import englishTranslation from './en-us';
import russianTranslation from './ru-ru';
import chineseTranslation from './ch';

i18next.use(initReactI18next).init({
    interpolation: {
        // React already does escaping
        escapeValue: false,
    },
    lng: 'en',
    resources: {
        en: englishTranslation,
        ru: russianTranslation,
        ch: chineseTranslation
    },
});

export const t = (text) => i18next.t(text);

export const LanguageEnum = {
    EN: 'en-us',
    RU: 'ru-ru',
    CH: 'ch'
}

export default i18next;
