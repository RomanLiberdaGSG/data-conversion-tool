"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonToCsv = void 0;
var fs = require("fs");
var json2csv = require("json2csv");
var JsonToCsv = /** @class */ (function () {
    function JsonToCsv() {
    }
    JsonToCsv.prototype.exportToCsvFile = function (data, outputFilePath, delimiter) {
        if (delimiter === void 0) { delimiter = ","; }
        if (data.length !== 0) {
            var csvData = json2csv.parse(data, { delimiter: delimiter });
            fs.writeFileSync(outputFilePath, csvData, 'utf-8');
            console.log('CSV file created successfully');
        }
        else {
            console.log('Something went wrong. Nothing to export.');
        }
    };
    return JsonToCsv;
}());
exports.JsonToCsv = JsonToCsv;
