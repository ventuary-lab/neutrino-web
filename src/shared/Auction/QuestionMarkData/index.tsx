import React from 'react';
import hintIcon from 'static/icons/hint/icon.svg';

import './style.scss';

interface Props {
    text: React.ReactNode;
}

class QuestionMarkData extends React.Component<Props, { isHovered: boolean }> {
    constructor(props) {
        super(props);

        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);

        this.state = { isHovered: false };
    }

    onMouseEnter() {
        this.setState({ isHovered: true });
    }
    onMouseLeave() {
        this.setState({ isHovered: false });
    }

    render() {
        const { isHovered } = this.state;
        const { text } = this.props;
        return (
            <div className="QuestionMarkData" onMouseLeave={this.onMouseLeave}>
                <img className="hint" src={hintIcon} onMouseEnter={this.onMouseEnter} />
                <div className={`text ${!isHovered ? 'not-hovered' : ''}`}>
                    <div className="cap"></div>
                    {text}
                </div>
            </div>
        );
    }
}

export default QuestionMarkData;
