"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvParser = void 0;
var sync_1 = require("csv-parse/sync");
var fs = require("fs");
var CsvParser = /** @class */ (function () {
    function CsvParser() {
    }
    CsvParser.prototype.parseToJSON = function (filePath, delimiter) {
        if (delimiter === void 0) { delimiter = ","; }
        var data = [];
        var string = fs.readFileSync(filePath, 'utf-8');
        var results = (0, sync_1.parse)(string, { columns: true, delimiter: ';' });
        for (var i = 0; i < results.length; i++) {
            data.push(results[i]);
        }
        return data;
    };
    return CsvParser;
}());
exports.CsvParser = CsvParser;
