export const checkValuesAreEmpty = (...values) => {
    return values.filter((x) => x == '').length == values.length;
};

export const checkValuesAreDefined = (...values) => {
    return values.filter((x) => x == false).length == 0;
};
