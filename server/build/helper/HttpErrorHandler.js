"use strict";
// handle http errors
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var HTTPErrorHandler = /** @class */ (function (_super) {
    __extends(HTTPErrorHandler, _super);
    function HTTPErrorHandler(error, status) {
        if (status === void 0) { status = 500; }
        var _this = _super.call(this, error) || this;
        _this.status = status;
        Object.setPrototypeOf(_this, HTTPErrorHandler.prototype);
        console.log("http error handler!!!");
        return _this;
    }
    return HTTPErrorHandler;
}(Error));
