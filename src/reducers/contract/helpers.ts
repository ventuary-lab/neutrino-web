import { floor as _floor } from 'lodash';
import { IOrder } from 'routes/BondsDashboard/types';

export const NEUTRINO_DEC: number = 1e6

// float price is considered
export const mapPriceToContract = (price: number) => price * NEUTRINO_DEC

// roi = 100*(b - w*cp)/(w*cp)
export const computeROI = (bondsAmount: number, wavesAmount: number, currentPrice: number) =>
    (100 * (bondsAmount - wavesAmount * (currentPrice / 100))) /
    (wavesAmount * (currentPrice / 100));

// b = ((roi/100) + 1)*(w*cp)
export const computeBondsAmountFromROI = (roi: number, wavesAmount: number, currentPrice: number) =>
    (roi / 100 + 1) * (wavesAmount * currentPrice);

// w = (b/((roi/100) + 1))/cp
export const computeWavesAmountFromROI = (roi: number, bondsAmount: number, currentPrice: number) =>
    bondsAmount / (roi / 100 + 1) / currentPrice;

export const getComputedBondsFromROI = (roi: number, waves: number, controlPrice: number) => {
    return _floor(computeBondsAmountFromROI(roi, waves, controlPrice) / 100);
};
// priceWavesByBondCents = floor(100*100*64) = 156
// roi = (156-94)*100/94 = 65
// BR = 100-65 = 35
// currentPrice is int
export const computePriceWavesByBondCents = (roi, currentPrice) => {
    return (roi + currentPrice * (100 / currentPrice)) / (100 / currentPrice);
};
// orderPrice is int
export const computePriceWavesByBondCentsFromOrderPrice = (orderPrice) => {
    return (100 * 100) / orderPrice
};
export const computeROIFromPriceWavesByBondCents = (priceWavesByBondCents, currentPrice) => {
    return (priceWavesByBondCents - currentPrice) * (100 / currentPrice);
};
export const computeOrderPriceFromPriceWavesByBondCents = (priceWavesByBondCents) => {
    return _floor((100 * 100) / priceWavesByBondCents)
};

export const computeBR = (
    values: {
        reserveInWaves: number;
        supplyInNeutrino: number;
    },
    currentPrice: number
) => {
    const { reserveInWaves, supplyInNeutrino } = values;
    const reserveInNeutrino = reserveInWaves * currentPrice;

    return reserveInNeutrino / supplyInNeutrino;
};

export const computeBRFromROI = (roi) => 100 - roi;
// ROI param is decimal, currentPrice in both fns - not
export const computeNSBTFromROI = (roi, wavesAmount, currentPrice) =>
    (roi + 1) * (currentPrice / 100) * wavesAmount;
// BR param is decimal
export const computeNSBTFromBR = (br, wavesAmount, currentPrice) =>
    (2 - br) * (currentPrice / 100) * wavesAmount;
// Derived from upper formula, returns decimal BR
export const computeBRFromNSBTandWaves = (nsbt, wavesAmount, currentPrice) =>
    -1 * (nsbt / (wavesAmount * (currentPrice / 100))) + 2;

// remainedTotal is waves amount
export const computeNSBTContractApproach = (remainedTotal, priceWavesByBondCents, pauli = 1e6, wavelet = 1e8) => {
    return _floor(_floor(wavelet * remainedTotal*priceWavesByBondCents/100)*(pauli/wavelet) / pauli)
}

// export const computeBRFromNeutrino = (nsbt, neutrino) => (nsbt - neutrino) / neutrino // DECIMAL BR VALUE
// export const computeNSBTFromBR = (br, neutrino) => neutrino * (1 + br) // DECIMAL BR VALUE

// NOT DECIMAL CONTROL PRICE
export const convertWavesToNeutrino = (waves, controlPrice) => waves * (controlPrice / 100);
export const convertNeutrinoToWaves = (neutrino, controlPrice) => neutrino / (controlPrice / 100);
