import React from 'react';
import OutsideAlerter from 'ui/global/OutsideAlerter';
import { isEqual } from 'lodash';

import arrowUpIcon from 'static/icons/arrow-up.svg';
export interface MenuOption {
    isSelected?: boolean;
    label: string;
    value: string | number | boolean;
    onClick?: (...args: any[]) => void;
}
interface Props {
    onSelect: (...args: any[]) => void;
    options: MenuOption[];
}
interface State {
    options: MenuOption[];
    isOpened: boolean;
}

import './style.scss';

class MenuSwitcher extends React.Component<Props, State> {
    mainRef;

    constructor(props) {
        super(props);

        this.mapOption = this.mapOption.bind(this);
        this.onOptionClick = this.onOptionClick.bind(this);
        this.handleOpenMenu = this.handleOpenMenu.bind(this);
        this.handleCloseMenu = this.handleCloseMenu.bind(this);
        this.handleTriggerMenu = this.handleTriggerMenu.bind(this);

        this.mainRef = React.createRef();

        this.state = {
            options: this.props.options,
            isOpened: false,
        };
    }

    componentDidUpdate(prevProps) {
        const { options } = this.props;

        if (!isEqual(prevProps.options, options)) {
            this.setState({ options: options });
        }
    }

    onOptionClick(event: React.SyntheticEvent, opt: MenuOption) {
        const { onSelect } = this.props;
        let { options, isOpened } = this.state;

        options = options.map((iterOpt) =>
            iterOpt.label === opt.label
                ? { ...opt, isSelected: true }
                : { ...iterOpt, isSelected: false }
        );

        this.setState({ options, isOpened: !isOpened });

        if (opt.onClick) {
            opt.onClick(opt.value);
        }

        onSelect(opt.value);
    }

    handleTriggerMenu() {
        this.setState(prevState => ({ isOpened: !prevState.isOpened }));
    }

    handleOpenMenu() {
        this.setState({ isOpened: false });
    }

    handleCloseMenu() {
        this.setState({ isOpened: false });
    }

    mapOption(opt: MenuOption) {
        return (
            <div
                className={`option ${opt.isSelected ? 'current' : ''}`}
                onClick={(event) => this.onOptionClick(event, opt)}
            >
                {opt.label}
            </div>
        );
    }

    getTabs(options: MenuOption[]) {
        let currentTab;
        const otherTabs = options.filter((opt) => {
            if (opt.isSelected) {
                currentTab = opt;
            }
            return true || !opt.isSelected;
        });

        return [this.mapOption(currentTab), otherTabs.map(this.mapOption)];
    }

    render() {
        const { options, isOpened } = this.state;
        const [currentTab, otherTabs] = this.getTabs(options);
        const openedClassName = isOpened ? 'opened' : '';

        return (
            <OutsideAlerter
                handler={this.handleCloseMenu}
                className={`MenuSwitcher ${openedClassName}`}
            >
                <div className="main" ref={this.mainRef}>
                    {currentTab}
                    <img className="icon" src={arrowUpIcon} onClick={this.handleTriggerMenu}/>
                </div>
                <div className={`menu ${openedClassName}`}>{otherTabs}</div>
            </OutsideAlerter>
        );
    }
}

export default MenuSwitcher;
