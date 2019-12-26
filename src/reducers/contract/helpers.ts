
export const computeROI = (bondsAmount: number, wavesAmount: number, wavesPrice: number) =>
    (bondsAmount - wavesAmount * (wavesPrice / 100)) / (wavesAmount * (wavesPrice / 100));
