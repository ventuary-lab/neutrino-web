export const mapFieldsToNumber = (
    item: Record<string, any>,
    fields: string[]
): Record<string, any> => {
    let updatedItem = { ...item };

    for (const field of fields) {
        updatedItem[field] = Number(updatedItem[field]);
    }

    return updatedItem;
};
