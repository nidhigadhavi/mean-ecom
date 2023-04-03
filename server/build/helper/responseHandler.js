"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendHttpResponse = void 0;
var sendHttpResponse = function (_a) {
    var _b = _a.status, status = _b === void 0 ? 200 : _b, data = __rest(_a, ["status"]);
    return data.res.status(status).json({
        data: data.data,
        message: data.message,
        status: status
    });
};
exports.sendHttpResponse = sendHttpResponse;
