"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var XtCommerceToJudgeMeConverter_1 = require("./converter/XtCommerceToJudgeMeConverter");
var ps = require("prompt-sync");
var JsonToCsv_1 = require("./exporter/JsonToCsv");
var XlsxParser_1 = require("./dataParser/XlsxParser");
var CsvParser_1 = require("./dataParser/CsvParser");
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.convertXtCommerceToJudgeMe = function () {
        var converter = new XtCommerceToJudgeMeConverter_1.XtCommerceToJudgeMeConverter(new XlsxParser_1.XlsxParser(), new CsvParser_1.CsvParser(), new JsonToCsv_1.JsonToCsv());
        converter.convert('./files/source.xlsx', './files/mapping.csv', './files/output.csv');
    };
    Main.chooseFunction = function () {
        var prompt = ps();
        console.log('Choose a function to call:');
        console.log('1. Convert Reviews XtCommerce To JudgeMe');
        console.log('---------------------------------');
        console.log('XLSX File with source data place please to folder files with name source.xlsx');
        console.log('CSV Mapping file place please to folder files with name mapping.csv');
        var choice = prompt('Enter the number of the function: ');
        // Call the selected function
        switch (choice) {
            case '1':
                this.convertXtCommerceToJudgeMe();
                break;
            // Add cases for other functions here if needed
            default:
                console.log('Invalid choice.');
                break;
        }
    };
    Main.main = function () {
        // Call the function chooser
        this.chooseFunction();
    };
    return Main;
}());
Main.main();
