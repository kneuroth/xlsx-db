import xlsx from 'xlsx'
import Algorithms from '../js/algorithms.js';

function deleteRecord(id, filepath){
    const data = getDataArray(filepath)
    let index = -1
    for(let i = 0; i < data.length; i++){
        if (data[i].id == id){
            index = i
        }
    }
    if(index == -1){
        throw 'Data not found'
    }

    const file = xlsx.readFile(filepath);

    const worksheet = file.Sheets.Sheet1
    
    let sheetJson = xlsx.utils.sheet_to_json(worksheet)

    sheetJson.splice(index, 1)

    file.Sheets.Sheet1 = xlsx.utils.json_to_sheet(sheetJson)
    
    xlsx.writeFile(file, filepath)
}

function editRecord(record, filepath){
    const data = getDataArray(filepath)
    let index = -1
    for(let i = 0; i < data.length; i++){
        if (data[i].id == record.id){
            index = i
        }
    }
    if(index == -1){
        throw 'Data not found'
    }


    const file = xlsx.readFile(filepath);

    const worksheet = file.Sheets.Sheet1
    
    let sheetJson = xlsx.utils.sheet_to_json(worksheet)

    let keys = Object.keys(sheetJson[index])

    for(let i = 0; i < keys.length; i++){
        if(keys[i] != 'id'){
            sheetJson[index][keys[i]] = record[keys[i]]
        }
    }

    file.Sheets.Sheet1 = xlsx.utils.json_to_sheet(sheetJson)
    
    xlsx.writeFile(file, filepath)

    return sheetJson[index]

}

function saveNewRecord(record, filepath){


    let file
    try {
        file = xlsx.readFile(filepath);
    } catch (err) {
        console.log(err)
        if (err.errno == -4058){
            throw `methods.saveNewRecord: The file ${filepath} does not exist, please create it`
        }
    }
    


    const worksheets = {}
    for(const sheetName of file.SheetNames){
        worksheets[sheetName] = xlsx.utils.sheet_to_json(file.Sheets[sheetName])
    }
    let map = getDataMap(filepath)
    let ids = Object.keys(map)

    
    let id = 0
    try {
        id = Algorithms.getLowestAvailableInt(ids)
    } catch (err){
        console.log('getLowestAvailableInt failed, no ids found, inserting with id : 0')
    }
    
    
    let newRecord = Object.assign( 
        {
            id: id
        },
        record,
    )
   
    worksheets.Sheet1.push(newRecord)

    xlsx.utils.sheet_add_json(file.Sheets["Sheet1"], worksheets.Sheet1)
    xlsx.writeFile(file, filepath)
    
    return newRecord
}

function getDataArray(filepath){
    const file = xlsx.readFile(filepath);

    let data = []

    const sheets = file.SheetNames

    for(let i = 0; i < sheets.length; i++){
        const temp = xlsx.utils.sheet_to_json(file.Sheets[file.SheetNames[i]])
        temp.forEach( (res) => {
            data.push(res)
        })
    }
    return data
}

function getDataMap(filepath){
    var file
    try {
        file = xlsx.readFile(filepath);
    } catch(err) {
        return {}
    }
    
    let data = {}

    const sheets = file.SheetNames

    for(let i = 0; i < sheets.length; i++){
        const temp = xlsx.utils.sheet_to_json(file.Sheets[file.SheetNames[i]])
        temp.forEach( (res) => {
            data[res.id] = res
        })
    }
    return data
    
}

function findById(id, filepath){
    let data = getDataMap(filepath)

    return data[id]
}

function find(filepath){
    let data = getDataArray(filepath)

    return data
}

function remove(id, filepath){
    deleteRecord(id, filepath)

    return
}

function post(record, filepath){
    try {

        let newRecord = saveNewRecord(record, filepath)

        return newRecord
    } catch (err) {
        return err
    }
}

async function patch(record, filepath){
    let editedRecord = await editRecord(record, filepath)

    return editedRecord
}

export default { findById, find, post, remove, patch }
