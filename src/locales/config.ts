import i18next from 'i18next';
import { mergeDeepRight } from 'ramda';

import englishTranslation from './en-us';
// import russianTranslation from './ru-ru';
import chineseTranslation from './cn';

export const LanguageEnum = {
    EN: 'en',
    CH: 'cn',
};

const localStorageKey = 'default-locale';
const getDefaultLanguage = () => {
    return (
        // @ts-ignore
        (typeof window !== undefined && window.localStorage.getItem(localStorageKey)) ||
        LanguageEnum.EN
        // (window?.localStorage?.getItem(localStorageKey)) || LanguageEnum.EN
    );
};
const onChangeLanguage = (i18n, language) => {
    // @ts-ignore
    if (typeof window !== undefined) {
        window.localStorage.setItem(localStorageKey, language);
    }
    console.log({ i18n })
    i18n.changeLanguage(language);
};

export const i18nConfig = {
    interpolation: {
        // React already does escaping
        escapeValue: false,
    },
    lng: getDefaultLanguage(),
    resources: {
        [LanguageEnum.EN]: englishTranslation,
        [LanguageEnum.CH]: mergeDeepRight(englishTranslation, chineseTranslation),
    },
}

export const getLangDropdownItems = () => [
    {
        label: 'English',
        flag: '🇬🇧',
        lng: LanguageEnum.EN,
        onClick: (i18n) => onChangeLanguage(i18n, LanguageEnum.EN),
    },
    {
        label: '中文',
        flag: '🇨🇳',
        lng: LanguageEnum.CH,
        onClick: (i18n) => onChangeLanguage(i18n, LanguageEnum.CH),
    },
];
export const getLanguageDropdownProps = () => ({
    default: getLangDropdownItems().find((lang) => lang.lng === getDefaultLanguage()),
    langs: getLangDropdownItems(),
});

export const t = (text) => i18next.t(text);

export default i18next;