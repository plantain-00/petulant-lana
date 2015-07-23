var md5 = require("md5");

export function generate(password:string, strategy = null):{
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
    };
}

export function isValid(password:string, milliseconds:string, result:string, timeSpan:number, strategy:string = null):boolean {
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
