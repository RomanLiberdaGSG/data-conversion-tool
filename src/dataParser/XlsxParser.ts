import {IToJsonParser} from "./IToJsonParser";
import * as xlsx from 'xlsx';
export class XlsxParser implements IToJsonParser{
    parseToJSON(filePath: string): any[] {
        const workbook = xlsx.readFile(filePath);
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        return xlsx.utils.sheet_to_json(worksheet)
    }
}