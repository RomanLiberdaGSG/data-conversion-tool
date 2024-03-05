"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XlsxParser = void 0;
var xlsx = require("xlsx");
var XlsxParser = /** @class */ (function () {
    function XlsxParser() {
    }
    XlsxParser.prototype.parseToJSON = function (filePath) {
        var workbook = xlsx.readFile(filePath);
        var sheetName = workbook.SheetNames[0];
        var worksheet = workbook.Sheets[sheetName];
        return xlsx.utils.sheet_to_json(worksheet);
    };
    return XlsxParser;
}());
exports.XlsxParser = XlsxParser;
