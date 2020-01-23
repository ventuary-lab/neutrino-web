export const computeROI = (bondsAmount: number, wavesAmount: number, wavesPrice: number) =>
    (100 * (bondsAmount - wavesAmount * (wavesPrice / 100))) / (wavesAmount * (wavesPrice / 100));

// ((bondsAmount, wavesAmount, wavesPrice) => 100 * (bondsAmount - wavesAmount*(wavesPrice/100))/(wavesAmount*(wavesPrice/100)))(1, 0.73, 93)
