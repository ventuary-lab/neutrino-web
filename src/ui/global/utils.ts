interface SortingOptions {
    isNumber: boolean;
}
export class Utils {
    static mapFieldsByPredicate<T = { [key: string]: any }>(
        array: T[],
        fields: string[],
        callback: (item: T) => any
    ) {
        return array.map(item => {
            for (const field of fields) {
                item[field] = callback(item[field]);
            }
            return item;
        });
    }

    static mapToNumber<T extends string>(item: T) {
        return Number(item);
    }
}
