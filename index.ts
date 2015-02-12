/**
 * Created by yaoyao on 15/2/11.
 */

declare var require:any;

var md5 = require("./node_modules/blueimp-md5").md5;

class Retriever {
    generate(password:string, strategy = null):{
        result:string;
        milliseconds:string} {
        var milliseconds = new Date().getTime().toString(16);
        if (strategy == null) {
            return {
                result: md5(password + milliseconds),
                milliseconds: milliseconds
            }
        }
        return {
            result: md5(password + milliseconds + strategy),
            milliseconds: milliseconds
        }
    }

    isValid(password:string, milliseconds:string, result:string, timeSpan:number, strategy:string = null):boolean {
        var s = parseInt(milliseconds, 16);
        if (new Date().getTime() < s
            || new Date().getTime() > s + timeSpan) {
            return false;
        }
        if (strategy == null) {
            return md5(password + milliseconds) == result;
        }
        return md5(password + milliseconds + strategy) == result;
    }
}

declare var module:any;
module.exports = new Retriever();