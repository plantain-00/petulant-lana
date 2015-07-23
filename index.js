var md5 = require("md5");
function generate(password, strategy) {
    if (strategy === void 0) { strategy = null; }
    var milliseconds = new Date().getTime().toString(16);
    if (strategy == null) {
        return {
            result: md5(password + milliseconds),
            milliseconds: milliseconds
        };
    }
    return {
        result: md5(password + milliseconds + strategy),
        milliseconds: milliseconds
    };
}
exports.generate = generate;
function isValid(password, milliseconds, result, timeSpan, strategy) {
    if (strategy === void 0) { strategy = null; }
    var s = parseInt(milliseconds, 16);
    if (new Date().getTime() < s || new Date().getTime() > s + timeSpan) {
        return false;
    }
    if (strategy == null) {
        return md5(password + milliseconds) == result;
    }
    return md5(password + milliseconds + strategy) == result;
}
exports.isValid = isValid;
//# sourceMappingURL=index.js.map