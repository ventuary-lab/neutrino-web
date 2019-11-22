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
    productLinks!: Link[];
    links!: Link[];

    constructor(props) {
        super(props);

        this.mapLink = this.mapLink.bind(this);

        this.productLinks =  [
            {
                label: 'Neutrino dashboard',
            },
            {
                label: 'Bonds dashboard',
            },
            {
                label: 'Staking dashboard',
            },
        ];
        this.links = [
            {
                label: 'Products',
            },
            {
                label: 'Learn',
            },
            {
                label: 'Login',
            },
        ];
    }

    mapLink(link: Link) {
        return (
            <li>
                <a href="#">{link.label}</a>
            </li>
        );
    }

    render() {
        const links = this.links.map(this.mapLink);
        const productLinks = this.productLinks.map(this.mapLink);

        return (
            <div className={bem.element('main')}>
                <div className={bem.element('logo')}>
                    <img src={mainLogo} alt="neutrino" />
                    <span>beta</span>
                </div>
                <div className={bem.element('actions')}>
                    <div className={bem.element('products-dp')}>
                        <ul>{productLinks}</ul>
                    </div>
                    <ul className={bem.element('links')}>{links}</ul>
                </div>
            </div>
        );
    }
}

export default LandingHeader;
