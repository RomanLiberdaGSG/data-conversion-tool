import {parse} from "csv-parse/sync";
import * as fs from "fs";
import {IToJsonParser} from "./IToJsonParser";

export class CsvParser implements IToJsonParser {
    parseToJSON(filePath: string, delimiter = ","): any[] {
        const data:any[] = [];
        const string = fs.readFileSync(filePath, 'utf-8');

        const results = parse(string, {columns: true, delimiter: ';'});


        for (let i = 0; i < results.length; i++) {
            data.push(results[i]);
        }

        return data;
    }
}