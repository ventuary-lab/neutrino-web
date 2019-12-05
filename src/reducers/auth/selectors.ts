export const getAppConfig = state => state.auth.data.config;
export const getMassPaymentSender = state => getAppConfig(state).dal.massPaymentSender;
