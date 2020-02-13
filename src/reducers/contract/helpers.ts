export const computeROI = (bondsAmount: number, wavesAmount: number, wavesPrice: number) =>
    (100 * (bondsAmount - wavesAmount * (wavesPrice / 100))) / (wavesAmount * (wavesPrice / 100));

    