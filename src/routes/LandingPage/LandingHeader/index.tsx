import React from 'react';
import { html } from 'components';
import mainLogo from 'static/images/logo.svg';

import './style.scss';

const bem = html.bem('LandingHeader');

interface Props {}
interface Link {
    label: string;
    onClick?: () => void;
}

class LandingHeader extends React.Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        const links = [
            {
                label: 'Products',
            },
            {
                label: 'Learn',
            },
            {
                label: 'Login',
            },
        ].map((link: Link) => (
            <li>
                <a href="#">{link.label}</a>
            </li>
        ));

        return (
            <div className={bem.element('main')}>
                <div className={bem.element('logo')}>
                    <img src={mainLogo} alt="" />
                    <span>beta</span>
                </div>
                <div className={bem.element('actions')}>
                    <ul className={bem.element('links')}>{links}</ul>
                </div>
            </div>
        );
    }
}

export default LandingHeader;
