import { Link } from 'ui/global/types';
import { EXCHANGE_LABEL } from 'shared/Layout/constants';

export const getExchangeLink = (links: Link[]) => links.find(link => link.label === EXCHANGE_LABEL);