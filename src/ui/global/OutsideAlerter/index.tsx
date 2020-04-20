import React from 'react';

interface Props extends React.HTMLProps<HTMLDivElement> {
    handler: (...args: any[]) => void;
}

class OutsideAlerter extends React.Component<Props> {
    wrapperRef: React.RefObject<HTMLDivElement>;

    constructor(props) {
        super(props);

        this.wrapperRef = React.createRef();
        this.onClickOutside = this.onClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.onClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.onClickOutside);
    }

    onClickOutside(event: Event) {
        if (
            this.wrapperRef.current &&
            !this.wrapperRef.current.contains(event.target as HTMLDivElement)
        ) {
            this.props.handler(event);
        }
    }

    render() {
        return <div {...this.props} ref={this.wrapperRef}>{this.props.children}</div>;
    }
}

export default OutsideAlerter;
