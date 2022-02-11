import xlsx from 'xlsx'

function EmptyFile(filepath) {
    let file = xlsx.readFile(filepath);
    let worksheet = file.Sheets.Sheet1;
    let sheetJson = xlsx.utils.sheet_to_json(worksheet);
    sheetJson = [];
    file.Sheets.Sheet1 = xlsx.utils.json_to_sheet(sheetJson);
    xlsx.writeFile(file, filepath);
}

function PopulateFileWithOne(filepath) {
    let file = xlsx.readFile(filepath);
    let worksheet = file.Sheets.Sheet1;
    let sheetJson = xlsx.utils.sheet_to_json(worksheet);
    sheetJson = [
        {"id": 0, "test": "A"}
        ];
    file.Sheets.Sheet1 = xlsx.utils.json_to_sheet(sheetJson);
    xlsx.writeFile(file, filepath);
}


export default function init_test_files() {

    // Post tests
    EmptyFile('testFiles/post-test-1-empty.xlsx');
    PopulateFileWithOne('testFiles/post-test-2-has-one.xlsx');

}