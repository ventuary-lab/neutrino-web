export const NEUTRINO_DASHBOARD_LABEL = 'Swap';
export const STAKING_DASHBOARD_LABEL = 'Staking';
export const TRANSFERS_LABEL = 'Transfers';
export const EXCHANGE_LABEL = 'Exchange';
export const INVOICES_LABEL = 'Invoices';
export const BONDS_DASHBOARD_LABEL = 'Auction';

export const ARTICLE_LABEL = 'USDNB -> NSBT';
export const DOCS_LABEL = 'Docs';
export const WHITEPAPER_LABEL = 'White paper';
export const FAQ_LABEL = 'FAQ';
export const BLOG_LABEL = 'Blog';
export const DISCUSSIONS_LABEL = 'Discussions';
export const GITHUB_LABEL = 'GitHub';
export const SMART_CONTRACT_LABEL = 'Smart Contract';
export const TERMS_OF_USE_LABEL = 'Terms of Use';
export const STAKING_REWARDS_LABEL = 'Staking Rewards';
export const SECURITY_AUDIT_LABEL = 'Security audit';

export const getLabelTranslationMap = t => {
    return {
        [NEUTRINO_DASHBOARD_LABEL]: t('common.swap.label'),
        [STAKING_DASHBOARD_LABEL]: t('common.staking.label'),
        [TRANSFERS_LABEL]: t('common.transfers.label'),
        [EXCHANGE_LABEL]: t('common.exchange.label'),
        [INVOICES_LABEL]: t('common.invoices.label'),
        [BONDS_DASHBOARD_LABEL]: t('common.auction.label'),

        [ARTICLE_LABEL]: t('common.article.label'),
        [DOCS_LABEL]: t('common.docs.label'),
        [WHITEPAPER_LABEL]: t('common.whitepaper.label'),
        [FAQ_LABEL]: t('common.faq.label'),
        [BLOG_LABEL]: t('common.blog.label'),
        [DISCUSSIONS_LABEL]: t('common.discussions.label'),
        [GITHUB_LABEL]: t('common.github.label'),
        [SMART_CONTRACT_LABEL]: t('common.smart_contract.label'),
        [TERMS_OF_USE_LABEL]: t('common.terms_of_use.label'),
        [STAKING_REWARDS_LABEL]: t('heading.staking_rewards.label'),
        [SECURITY_AUDIT_LABEL]: t('common.security_audit.label'),
    }
}
export const mapNavLabelItem = <T extends  Record<string, string>>(item: T, translationMap: T) => {
    return {
        ...item,
        label: translationMap[item.label] || item.label
    }
}

export enum LayoutUrlParams {
    LOGIN_WARNING_PARAM = 'loginWarning',
}
