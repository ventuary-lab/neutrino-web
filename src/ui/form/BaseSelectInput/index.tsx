import React from 'react';

import './style.scss';

type SelectOption = { value: number | string | string[]; label: string };
type Props = {
    options: SelectOption[];
    onSelect?: (opt: SelectOption) => void;
};
type State = {
    isOpened: boolean;
};

class BaseSelectInput extends React.Component<Props, State> {
    constructor(props) {
        super(props);

        this.mapSelectOption = this.mapSelectOption.bind(this);
        this.onSelect = this.onSelect.bind(this);

        this.state = {
            isOpened: false,
        };
    }

    mapSelectOption(option: SelectOption, index: number) {
        const { value, label } = option;
        return (
            <option value={value} onClick={() => this.onSelect(option)} selected={index === 0}>
                {label}
            </option>
        );
    }

    onSelect(option: SelectOption) {
        const { onSelect = () => {} } = this.props;

        onSelect(option);
    }

    render() {
        const { options, onSelect, ...restProps } = this.props;

        return (
            <select className="BaseSelectInput" {...restProps}>
                {options.map(this.mapSelectOption)}
            </select>
        );
    }
}

export default BaseSelectInput;
