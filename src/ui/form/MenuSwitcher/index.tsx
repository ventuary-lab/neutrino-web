import React from 'react';

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
    constructor(props) {
        super(props);

        this.mapOption = this.mapOption.bind(this);
        this.onOptionClick = this.onOptionClick.bind(this);

        this.state = {
            options: this.props.options,
            isOpened: false,
        };
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
            <div className={`MenuSwitcher ${openedClassName}`}>
                {currentTab}
                <div className={`menu ${openedClassName}`}>{otherTabs}</div>
            </div>
        );
    }
}

export default MenuSwitcher;
