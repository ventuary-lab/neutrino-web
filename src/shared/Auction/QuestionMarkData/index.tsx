import React from 'react';
import hintIcon from 'static/icons/hint/icon.svg';

import './style.scss';

class QuestionMarkData extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="QuestionMarkData">
                <img src={hintIcon} />
            </div>
        );
    }
}

export default QuestionMarkData