import i18next from 'i18next';
import { mergeWith, isObject } from 'lodash';

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
    console.log({ i18n });
    i18n.changeLanguage(language);
};

const notStatedPrefix = '[N/A]';
const warningMessageMergeCallback = (objValue, srcValue) => {
    if (isObject(objValue) && isObject(srcValue)) {
        return mergeWith(objValue, srcValue, warningMessageMergeCallback);
    } else if (!isObject(objValue) && !isObject(srcValue)) {
        return objValue || `${notStatedPrefix}${srcValue}`;
    }
    return objValue;
};

const chineseTranslationWithWarning = mergeWith(
    chineseTranslation,
    englishTranslation,
    warningMessageMergeCallback
);

console.log({ chineseTranslationWithWarning });
export const i18nConfig = {
    interpolation: {
        // React already does escaping
        escapeValue: false,
    },
    lng: getDefaultLanguage(),
    resources: {
        [LanguageEnum.EN]: englishTranslation,
        [LanguageEnum.CH]: chineseTranslationWithWarning,
    },
};

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
