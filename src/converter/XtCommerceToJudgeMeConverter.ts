import {IToJsonParser} from "../dataParser/IToJsonParser";
import {JsonToCsv} from "../exporter/JsonToCsv";

export class XtCommerceToJudgeMeConverter {

    private sourceParser: IToJsonParser;
    private mappingParser: IToJsonParser;
    private exporter: JsonToCsv;

    constructor(sourceParser: IToJsonParser, mappingParser: IToJsonParser, exporter: JsonToCsv) {
        this.sourceParser = sourceParser;
        this.mappingParser = mappingParser;
        this.exporter = exporter;
    }

    convert(inputFilePath: string, mappingFilePath: string, outputFilePath: string): void {
        const sourceData = this.sourceParser.parseToJSON(inputFilePath);
        const mappingData = this.mappingParser.parseToJSON(mappingFilePath);
        const results: any[] = [];


        sourceData.forEach((product) => {
            mappingData.forEach((mapping) => {
                if (product.products_model === mapping.sku) {
                    results.push({
                        title: product.review_title,
                        body: product.review_text,
                        rating: product.review_rating,
                        review_date: product.review_date,
                        source: '',
                        curated: '',
                        reviewer_name: product.review_nickname.length > 0 ? product.review_nickname : 'Anonym',
                        reviewer_email: 'anonym@gsg.com',
                        product_id: mapping.product_id,
                    });
                }
            });
        });

        this.exporter.exportToCsvFile(results, outputFilePath, ';');

    }
}
