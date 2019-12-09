import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import englishTranslation from './en-us';

i18next.use(initReactI18next).init({
    interpolation: {
        // React already does escaping
        escapeValue: false,
    },
    lng: 'en',
    resources: {
        en: englishTranslation,
        // es: {
        //     translation: {
        //         age: { label: 'Años' },
        //         home: { label: 'Casa' },
        //         name: { label: 'Nombre' },
        //     },
        // },
    },
});

export const t = (text) => i18next.t(text);

export default i18next;
