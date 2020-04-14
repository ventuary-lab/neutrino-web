import React from 'react';

import './style.scss';

interface LanguageItem {
    label: string;
    onClick?: (...args: any[]) => void;
}
interface Props {
    langs?: LanguageItem[];
}
interface State {
    currentLang?: LanguageItem;
    langs?: LanguageItem[];
    isOpened: boolean;
}

const chineseDomain = 'https://cn.neutrino.at';
const handleRedirect = (locale) => {
    if (locale === 'en') {
        window.location.href = 'https://neutrino.at';
    } else if (locale === 'ch' && !window.location.origin.includes(chineseDomain)) {
        window.location.href = chineseDomain;
    }
};
const defaultLangs: LanguageItem[] = [
    {
        label: '🇨🇳',
        onClick: () => handleRedirect('ch'),
    },
    {
        label: '🇬🇧',
        onClick: () => handleRedirect('en'),
    },
].reverse();

class LanguageSwitcher extends React.Component<Props, State> {
    constructor(props) {
        super(props);

        this.mapLang = this.mapLang.bind(this);
        this.handleItem = this.handleItem.bind(this);

        this.state = { currentLang: defaultLangs[0], langs: defaultLangs, isOpened: false };
    }

    handleItem(item: LanguageItem, index: number) {
        const { isOpened, currentLang, langs } = this.state;

        this.setState({
            isOpened: !isOpened,
            currentLang: isOpened ? item : currentLang,
            langs: isOpened ? [item, ...langs.filter((lang) => lang.label !== item.label)] : langs,
        });
    }

    mapLang(item: LanguageItem, index: number) {
        const { isOpened } = this.state;
        return (
            <div
                onClick={() => this.handleItem(item, index)}
                className={`${index === 0 ? 'first' : !isOpened ? 'hidden' : ''} lang-item`}
            >
                <div onClick={() => isOpened && item.onClick() }>{item.label}</div>
                {index === 0 && <img className={isOpened ? 'opened' : ''} src={'/static/icons/arrow-up.svg'} />}
            </div>
        );
    }

    render() {
        // const { langs = defaultLangs } = this.props;
        const { langs } = this.state;

        return <div className="LanguageSwitcher">{langs.map(this.mapLang)}</div>;
    }
}

export default LanguageSwitcher;
