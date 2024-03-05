"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XtCommerceToJudgeMeConverter = void 0;
var XtCommerceToJudgeMeConverter = /** @class */ (function () {
    function XtCommerceToJudgeMeConverter() {
    }
    XtCommerceToJudgeMeConverter.prototype.__construct = function (sourceParser, mappingParser, outputFilePath) {
        this.sourceParser = sourceParser;
        this.mappingParser = mappingParser;
    };
    XtCommerceToJudgeMeConverter.prototype.convert = function (inputFilePath, mappingFilePath, outputFilePath) {
        var sourceData = this.sourceParser.parseToJSON(inputFilePath);
        var mappingData = this.mappingParser.parseToJSON(mappingFilePath);
        var results = [];
        sourceData.forEach(function (product) {
            mappingData.forEach(function (mapping) {
                if (product.products_model === mapping['Variant SKU']) {
                    results.push({
                        title: product.review_title,
                        body: product.review_text,
                        rating: product.review_rating,
                        review_date: product.review_date,
                        source: '',
                        curated: '',
                        reviewer_name: product.review_nickname.length > 0 ? product.review_nickname : 'Anonym',
                        reviewer_email: '',
                        product_id: mapping.ID
                    });
                }
            });
        });
    };
    return XtCommerceToJudgeMeConverter;
}());
exports.XtCommerceToJudgeMeConverter = XtCommerceToJudgeMeConverter;
