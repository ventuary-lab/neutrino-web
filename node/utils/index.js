
class Utils {

    static sortNumeric (firstItem, secondItem, order = 'asc') {
        const a = firstItem;
        const b = secondItem;

        switch (order) {
            case 'asc':
                return a > b ? (a < b ? 1 : 0) : -1;
            case 'desc':
                return a < b ? (a > b ? 1 : 0) : -1;
        }
    }

    static getDefaultSortingOptions () {
        return {
            toNumber: false
        };
    }

    static orderBy (array, field, order, options = this.getDefaultSortingOptions()) {
        return array.sort(
            (firstItem, secondItem) => {
                try {
                    let a = firstItem[field];
                    let b = secondItem[field];

                    if (options.toNumber) {
                        a = Number(a);
                        b = Number(b);
                    }

                    return this.sortNumeric(a, b, order);
                } catch (err) {
                    console.log('Error occured on sorting', err);
                }
            }
        );
    }
}

module.exports = Utils;