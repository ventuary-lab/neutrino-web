import i18next from 'i18next';
import _ from 'lodash';
import { initReactI18next } from 'react-i18next';

import englishTranslation from './en-us';
import russianTranslation from './ru-ru';
import chineseTranslation from './ch';

const pureMerge = (obj1, obj2) => {
    const result = { ...obj1 };
    _.merge(result, obj2);
    return result;
};

export const LanguageEnum = {
    EN: 'en',
    RU: 'ru',
    CH: 'ch',
};

i18next.use(initReactI18next).init({
    interpolation: {
        // React already does escaping
        escapeValue: false,
    },
    lng: LanguageEnum.EN,
    resources: {
        [LanguageEnum.EN]: englishTranslation,
        [LanguageEnum.RU]: russianTranslation,
        [LanguageEnum.CH]: chineseTranslation,
    },
});

export const getLanguageDropdownProps = i18n => ({
    default: {
        label: 'English',
        flag: '🇬🇧',
        onClick: () => i18n.changeLanguage(LanguageEnum.EN),
    },
    langs: [
        {
            label: 'English',
            flag: '🇬🇧',
            onClick: () => i18n.changeLanguage(LanguageEnum.EN),
        },
        // {
        //     label: 'Russian',
        //     flag: '🇷🇺',
        //     onClick: () => i18n.changeLanguage(LanguageEnum.RU),
        // },
        {
            label: '文言',
            flag: '🇨🇳',
            onClick: () => i18n.changeLanguage(LanguageEnum.CH),
        },
    ],
});

export const t = (text) => i18next.t(text);

export default i18next;
