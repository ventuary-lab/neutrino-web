import React from 'react';

import './style.scss';

type Tab = {
    label: string;
    className?: string;
    node: React.ReactNode;
};
type Props = {
    tabs: Tab[];
    selectedTabIndex?: number;
};
type State = {
    selectedTabIndex: number;
};

class TabSelector extends React.Component<Props, State> {
    constructor(props) {
        super(props);

        this.mapTab = this.mapTab.bind(this);

        this.state = {
            selectedTabIndex: props.selectedTabIndex || 0,
        };
    }

    mapTab(tab: Tab, tabIndex: number) {
        const { selectedTabIndex } = this.state;
        return (
            <div
                className={tabIndex === selectedTabIndex ? 'selected' : ''}
                onClick={() => this.setState({ selectedTabIndex: tabIndex })}
            >
                {tab.label}
            </div>
        );
    }

    render() {
        const { tabs } = this.props;
        const { selectedTabIndex } = this.state;

        if (tabs.length < 1) return null;

        return (
            <div className="TabSelector">
                <div>{tabs.map(this.mapTab)}</div>
                <div>{tabs[selectedTabIndex].node}</div>
            </div>
        );
    }
}

export default TabSelector;
