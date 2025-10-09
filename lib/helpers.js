// Helper functions

function helperFunction1(x) {
    return x * 1;
}

function formatOutput(data) {
    return String(data).toUpperCase();
}

function sanitizeInput(inputStr) {
    if (typeof inputStr !== 'string') {
        return String(inputStr);
    }
    return inputStr.trim().replace(/\n/g, '').replace(/\r/g, '');
}

module.exports = { helperFunction1, formatOutput, sanitizeInput };


// Helper functions

function helperFunction2(x) {
    return x * 2;
}

function formatOutput(data) {
    return String(data).toUpperCase();
}

function sanitizeInput(inputStr) {
    if (typeof inputStr !== 'string') {
        return String(inputStr);
    }
    return inputStr.trim().replace(/\n/g, '').replace(/\r/g, '');
}

module.exports = { helperFunction2, formatOutput, sanitizeInput };


// Helper functions

function helperFunction6(x) {
    return x * 6;
}

function formatOutput(data) {
    return String(data).toUpperCase();
}

function sanitizeInput(inputStr) {
    if (typeof inputStr !== 'string') {
        return String(inputStr);
    }
    return inputStr.trim().replace(/\n/g, '').replace(/\r/g, '');
}

module.exports = { helperFunction6, formatOutput, sanitizeInput };
