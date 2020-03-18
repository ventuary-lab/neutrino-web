import { IScreenSizeContext } from './types';
import { Link } from 'ui/global/types';
import { EXCHANGE_LABEL, ARTICLE_LABEL } from 'shared/Layout/constants';

export const getExchangeLink = (links: Link[]) => links.find(link => link.label === EXCHANGE_LABEL);
export const getArticleLink = (links: Link[]) => links.find(link => link.label === ARTICLE_LABEL);

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

export const isScreenNarrowHelper = (el: Element) => {
    return el.clientWidth < 768;
}

export const isScreenNarrow = (sc?: IScreenSizeContext): boolean => {
    if (typeof window === 'undefined') {
        return;
    }

    if (typeof sc === 'undefined') {
        return isScreenNarrowHelper(document.body);
    }

    const entries = sc.getEntries();

    return sc.isScreenNarrow(entries.length > 0 && entries[0].target || document.body);
}