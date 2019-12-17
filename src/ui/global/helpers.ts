
export const onlyDecimalRegex = new RegExp('^(\d+|)\.\d+\.?$');
export const onlyDecimalRegex2 = /^\d*\.?\d*$/;

export const prettyPrintNumber = num => {
    let rs = num.toString();
    const regex = /(-?\d+)(\d{3})/;

    while (regex.test(rs)) {
        rs = rs.replace(regex, "$1,$2");
    }
    return rs;
}

export const omitThousandsNumber = num => {
    let rs = num.toString();
    const regex = /(-?\d+)(\d{3})/;

    while (regex.test(rs)) {
        rs = rs.replace(regex, "$1k");
    }
    return rs;
}