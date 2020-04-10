const fs = require('fs');
const XLSX = require('xlsx');
const lodash = require('lodash');

const parsed = XLSX.readFile('translate.xlsx');

const { Sheet1 } = parsed.Sheets;

// const columns = ['A', 'B', 'C'];
const maxRows = 300;
const saveFileForColumn = (column, fname) => {
    const result = {};

    for (let i = 0; i < maxRows; i++) {
        const key = `A${i}`;

        const value = Sheet1[key];
        const valueKey = `${column}${i}`;
        if (!value || !Sheet1[valueKey]) {
            continue;
        }

        lodash.set(result, value.v, Sheet1[valueKey].v);
    }

    fs.writeFileSync(fname, JSON.stringify({ translation: result }, null, 4));
};

saveFileForColumn('B', 'chinese.json');
