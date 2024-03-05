# Data Conversion Tool

This tool is designed to convert data from one format to another. It is designed to be used in a command line
environment.

## Installation

To install the tool, simply clone the repository and run the following command:

```bash
npm install
```

## Usage

To use the tool, run the following command:

```bash
npm start
```

After running the command, you will be prompted to select the desired conversion type with its requirements.

### Conversion Types

#### 1. Convert Reviews XtCommerce To JudgeMe

This conversion type requires the following files:

- `source.xslx` - The file containing the XTCommerce data:
    - The file must contain the following columns:
        - `products_model` - SKU of the product
        - `review_title` - review's title
        - `review_text` - review's text
        - `review_rating` - review's rating
        - `review_date` - review's date
        - `review_nickname` - The nickname of the reviewer


- `mapping.csv` - The file containing the XTCommerce and Shopify product mapping:
    - The file must contain the following columns:
        - `sku` - review's title
        - `product_id` - review's text
    - The delimiter must be a semi-colon (`;`)

## Requirements

- Node.js
- npm
- Git
- A command line environment
