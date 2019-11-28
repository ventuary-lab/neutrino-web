import { Link } from 'ui/global/types';

export const getExchangeLink = (links: Link[]) => links.find(link => link.label === 'Exchange');