import React from 'react';
import { html } from 'components';
import './style.scss';
const arrowDown = '/static/images/landing/arrow-down.svg';

const bem = html.bem('LanguageDropdown');

interface LanguageItem {
    label: string;
    flag: string;
    onClick: (...args: any[]) => void;
}

interface Props {
    langs: LanguageItem[];
    default: LanguageItem;
}
interface State {
    isOpened: boolean;
    currentLang: LanguageItem;
}

class LanguageDropdown extends React.Component<Props, State> {
    constructor(props) {
        super(props);

        this.mapLink = this.mapLink.bind(this);
        this.getLinkStyles = this.getLinkStyles.bind(this);

        this.state = {
            isOpened: false,
            currentLang: this.props.default
        };
    }

    mapLink(langItem: LanguageItem, itemIndex: number) {
        const { label, flag, onClick } = langItem;
        const { isOpened } = this.state;
        const _onClick = () => {
            this.setState(prevState => ({ isOpened: !prevState.isOpened, currentLang: langItem }));
            onClick();
        };

        return (
            <a onClick={_onClick}>
                <span>{flag}</span>
                <span>{label}</span>
                <img
                    src={arrowDown}
                    style={{ display: itemIndex !== 0 && 'none' }}
                    className={bem.element('dp-icon', isOpened && 'opened')}
                />
            </a>
        );
    }

    getLinkStyles() {
        const { isOpened } = this.state;
        const { langs } = this.props;
        const itemHeight = 63;
        const topPadding = 24;

        return {
            height: isOpened ? (itemHeight * langs.length - topPadding) : itemHeight,
        };
    }

    render() {
        const { langs } = this.props;
        const { currentLang } = this.state;
        const sortLang = (a, b) => {
            return a.label === currentLang.label ? -1 : 0;
        }
        const links = langs.sort(sortLang).map(this.mapLink);

        return (
            <div className={bem.element('main')}>
                <div style={this.getLinkStyles()}>{links}</div>
            </div>
        );
    }
}

export default LanguageDropdown;
