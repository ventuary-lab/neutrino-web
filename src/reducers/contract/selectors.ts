import { InitialPricesState } from "./types";

export const getControlPrice = (state: { contractPrices: InitialPricesState }) =>
    state.contractPrices.contractPrices.control_contract;
export const getTotalIssued = (state: { contractPrices: InitialPricesState }) =>
    state.contractPrices.contractPrices.totalIssued;