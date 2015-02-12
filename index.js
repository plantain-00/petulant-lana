/**
 * Created by yaoyao on 15/2/11.
 */
var md5 = require("./node_modules/blueimp-md5").md5;
var Retriever = (function () {
    function Retriever() {
    }
    Retriever.prototype.generate = function (password, strategy) {
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
    };
    Retriever.prototype.isValid = function (password, milliseconds, result, timeSpan, strategy) {
        if (strategy === void 0) { strategy = null; }
        var s = parseInt(milliseconds, 16);
        if (new Date().getTime() < s || new Date().getTime() > s + timeSpan) {
            return false;
        }
        if (strategy == null) {
            return md5(password + milliseconds) == result;
        }
        return md5(password + milliseconds + strategy) == result;
    };
    return Retriever;
})();
module.exports = new Retriever();
//# sourceMappingURL=index.js.map