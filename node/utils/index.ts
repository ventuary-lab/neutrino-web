interface SortingOptions {
    isNumber: boolean;
}

class Utils {
    static sortNumeric<T>(firstItem: T, secondItem: T, order = 'asc') {
        const a = firstItem;
        const b = secondItem;

        switch (order) {
            case 'asc':
                return a > b ? (a < b ? 1 : 0) : -1;
            case 'desc':
                return a < b ? (a > b ? 1 : 0) : -1;
        }
    }

    static getDefaultSortingOptions(): SortingOptions {
        return {
            isNumber: false,
        };
    }

    static orderBy<T extends { [key: string]: any }, K extends string>(
        array: T[],
        field: K,
        order: 'desc' | 'asc',
        options = this.getDefaultSortingOptions()
    ) {
        return array.sort((firstItem, secondItem) => {
            try {
                let a: any = firstItem[field];
                let b: any = secondItem[field];

                if (options.isNumber) {
                    a = Number(a);
                    b = Number(b);
                }

                return this.sortNumeric(a, b, order);
            } catch (err) {
                console.log('Error occured on sorting', err);
            }
        });
    }
}

export default Utils;
