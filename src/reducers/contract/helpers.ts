import { floor as _floor } from 'lodash'
import { IOrder } from 'routes/BondsDashboard/types';

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
    return Math.round(computeBondsAmountFromROI(roi, waves, controlPrice) / 100);
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

export const computeBRFromROI = roi => 100 - roi
// ROI param is decimal, currentPrice in both fns - not
export const computeNSBTFromROI = (roi, wavesAmount, currentPrice) => (roi + 1) * (currentPrice / 100) * wavesAmount
// BR param is decimal
export const computeNSBTFromBR = (br, wavesAmount, currentPrice) => (2 - br) * (currentPrice / 100) * wavesAmount
// Derived from upper formula, returns decimal BR
export const computeBRFromNSBTandWaves = (nsbt, wavesAmount, currentPrice) => (-1 * (nsbt/(wavesAmount*(currentPrice / 100)))) + 2

// export const computeBRFromNeutrino = (nsbt, neutrino) => (nsbt - neutrino) / neutrino // DECIMAL BR VALUE
// export const computeNSBTFromBR = (br, neutrino) => neutrino * (1 + br) // DECIMAL BR VALUE

// NOT DECIMAL CONTROL PRICE
export const convertWavesToNeutrino = (waves, controlPrice) => waves * (controlPrice / 100)
export const convertNeutrinoToWaves = (neutrino, controlPrice) => neutrino / (controlPrice / 100)