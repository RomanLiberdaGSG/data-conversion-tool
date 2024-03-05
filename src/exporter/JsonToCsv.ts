import * as fs from "fs";
import * as json2csv from 'json2csv';

export class JsonToCsv {
    public exportToCsvFile(data: any[], outputFilePath: string, delimiter = ","): void {
        if (data.length !== 0) {
            const csvData = json2csv.parse(data, {delimiter: delimiter});
            fs.writeFileSync(outputFilePath, csvData, 'utf-8');
            console.log('CSV file created successfully');
        } else {
            console.log('Something went wrong. Nothing to export.');
        }
    }
}