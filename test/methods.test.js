import assert from "assert"

import methods from "../lib/xlsx/methods.js"
import init_test_files from "./initializeTestFiles.js"


init_test_files()
describe('Methods', () => {

    
    describe('#post', () => {
        
        it('should add a single record to empty.xlsx', () => {
            let result = methods.post({ test: "A" }, 'testFiles/empty.xlsx')
            assert.equal(result.id, 0)
            assert.equal(result.test, "A")
        })

        it('should add a single record to hasOne.xlsx with id 1', () => {
            let result = methods.post({ test: "A" }, 'testFiles/hasOne.xlsx')
            assert.equal(result.id, 1)
            assert.equal(result.test, "A")
        })

        it('should throw an error when passing a non-existant filepath', () => {
            assert.throws(() => { methods.post({ test: "A" }, 'testFiles/nonexistant.xlsx') })
        })
    })
})
