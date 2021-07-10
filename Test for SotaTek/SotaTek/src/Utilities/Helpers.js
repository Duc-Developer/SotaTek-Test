const convertDateToStringFormat = (date, type = 'YYYY-MM-DD') => {
    switch (type) {
        case 'YYYY-MM-DD':
            return date.toISOString().slice(0, 10);
        default:
            return date.toString();
    }
};

const validateWithoutFullWhiteSpace = (string) => {
    const stringIsFullWhiteSpace = /^\s+$/.test(string);
    return string !== undefined && string !== '' && !stringIsFullWhiteSpace;
};

const HELPERS = {
    convertDateToStringFormat,
    validateWithoutFullWhiteSpace,
};

export default HELPERS;
