import {XtCommerceToJudgeMeConverter} from "./converter/XtCommerceToJudgeMeConverter";
import * as ps from 'prompt-sync';
import {JsonToCsv} from "./exporter/JsonToCsv";
import {XlsxParser} from "./dataParser/XlsxParser";
import {CsvParser} from "./dataParser/CsvParser";

class Main {

    static convertXtCommerceToJudgeMe(){
        const converter = new XtCommerceToJudgeMeConverter(new XlsxParser(), new CsvParser(), new JsonToCsv());
        converter.convert('./files/source.xlsx', './files/mapping.csv', './files/output.csv');
    }

    static chooseFunction() {
        const prompt = ps();
        console.log('Choose a function to call:');
        console.log('1. Convert Reviews XtCommerce To JudgeMe');
        console.log('---------------------------------');
        console.log('XLSX File with source data place please to folder files with name source.xlsx');
        console.log('CSV Mapping file place please to folder files with name mapping.csv');


        const choice = prompt('Enter the number of the function: ');

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
    }

    static main() {
        // Call the function chooser
        this.chooseFunction();
    }
}

Main.main();



