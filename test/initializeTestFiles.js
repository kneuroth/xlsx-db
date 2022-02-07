import xlsx from 'xlsx'


export default function init_test_files() {

    /**
     * Empty exmpty.xlsx file
     */
    const test1FilePath = 'testFiles/empty.xlsx'
    const file = xlsx.readFile(test1FilePath);
    const worksheet = file.Sheets.Sheet1
    let sheetJson = xlsx.utils.sheet_to_json(worksheet)
    sheetJson = []
    file.Sheets.Sheet1 = xlsx.utils.json_to_sheet(sheetJson)
    xlsx.writeFile(file, test1FilePath)

    

}