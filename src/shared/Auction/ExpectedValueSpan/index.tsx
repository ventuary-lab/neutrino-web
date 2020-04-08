import React from 'react';

import './style.scss';

type Props = { expected: string | number; label?: string };

const ExpectedValueSpan: React.FC<Props> = ({ expected, label, ...restProps }) => (
    <span {...restProps} className="ExpectedValueSpan">
        <span>{label || 'Exp. ROI'}</span>
        <span>{expected}</span>
    </span>
);

export default ExpectedValueSpan;
