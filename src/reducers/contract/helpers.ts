

export const computeROI = (bondsAmount: number, usdnAmount: number) => {
    return (bondsAmount - usdnAmount) / usdnAmount;
}