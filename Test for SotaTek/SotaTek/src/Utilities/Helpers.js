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

const changeToEnglishLowerCase = (string) => {
    return string
        .trim()
        .toLowerCase()
        .replace(/\s\s+/g, ' ')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd');
};

const HELPERS = {
    convertDateToStringFormat,
    validateWithoutFullWhiteSpace,
    changeToEnglishLowerCase,
};

export default HELPERS;
