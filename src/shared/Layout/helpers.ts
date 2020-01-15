import { Link } from 'ui/global/types';
import { EXCHANGE_LABEL } from 'shared/Layout/constants';

export const getExchangeLink = (links: Link[]) => links.find(link => link.label === EXCHANGE_LABEL);

export const hasBooleanPropChanged = <T, F extends (...args: string[]) => void>(
    prevProps: T,
    props: T,
    propertyName: string,
    handlers : { becameTrue: F, becameFalse: F }
) => {
    const newValue = props[propertyName];
    const oldValue = prevProps[propertyName];
    const { becameTrue: onChangeToTrue, becameFalse: onChangeToFalse } = handlers;

    if (newValue && !oldValue) {
        onChangeToTrue();
    } else if (!newValue && oldValue) {
        onChangeToFalse();
    }
}