import xlsx from 'xlsx'


export default function init_test_files() {

    /**
     * Empty exmpty.xlsx file
     */
    (function prepEmpty() {
        const emptyFilepath = 'testFiles/empty.xlsx';
        let file = xlsx.readFile(emptyFilepath);
        let worksheet = file.Sheets.Sheet1;
        let sheetJson = xlsx.utils.sheet_to_json(worksheet);
        sheetJson = [];
        file.Sheets.Sheet1 = xlsx.utils.json_to_sheet(sheetJson);
        xlsx.writeFile(file, emptyFilepath);
    })();
    

    
    /**
     * Add one entry to hasOne.xlsx
     */
     (function prepHasOne() {
        const hasOneFilepath = 'testFiles/hasOne.xlsx';
        let file = xlsx.readFile(hasOneFilepath);
        let worksheet = file.Sheets.Sheet1;
        let sheetJson = xlsx.utils.sheet_to_json(worksheet);
        sheetJson = [
            {"id": 0, "test": "A"}
            ];
        file.Sheets.Sheet1 = xlsx.utils.json_to_sheet(sheetJson);
        xlsx.writeFile(file, hasOneFilepath);
    })();
}