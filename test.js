/**
 * Created by yaoyao on 15/2/11.
 */
var assert = require("assert");
var retriever = require("./index.js");

describe('index.js', function () {
    describe('#generate()', function () {
        it('should pass', function () {
            var result = retriever.generate("abc");
            console.log("result:" + result.result);
            console.log("milliseconds:" + result.milliseconds);
            var isValid = retriever.isValid("abc", result.milliseconds, result.result, 10 * 1000);
            console.log(isValid);
        });
        it('should pass', function () {
            var result = retriever.generate("abc", "in 10 seconds");
            console.log("result:" + result.result);
            console.log("milliseconds:" + result.milliseconds);
            var isValid = retriever.isValid("abc", result.milliseconds, result.result, 10 * 1000, "in 10 seconds");
            console.log(isValid);
        });
    });
});